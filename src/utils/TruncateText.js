const TruncateText = ({ text, maxLength }) => {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

export default TruncateText;
