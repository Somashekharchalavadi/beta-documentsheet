# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

COPY vite.config.js ./
COPY index.html ./
COPY public ./public
COPY src ./src

ARG VITE_BASE_URL=https://beta.server.documentsheet.com
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN npm run build

# Runtime stage
FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
