import TabComponent from '../components/contact/TabComponent';
import ContactPageMessage from '../components/contact/ContactPageMessage';
import Banner from '../components/common/Banner';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Document Sheet</title>
        <meta
          name="description"
          content="Get in touch with Document Sheet for any inquiries, support, or partnership opportunities. We're here to help!"
        />

        <meta property="og:title" content="Contact Us - Document Sheet" />
        <meta
          property="og:description"
          content="Have questions or need assistance? Contact the Document Sheet team for support and inquiries."
        />
        <meta property="og:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta property="og:url" content="https://documentsheet.com/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Document Sheet" />
        <meta
          name="twitter:description"
          content="Need help? Contact Document Sheet for support, inquiries, and partnership opportunities."
        />
        <meta name="twitter:image" content="https://documentsheet.com/android-chrome-192x192.png" />
        <meta name="twitter:url" content="https://documentsheet.com/contact" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://documentsheet.com/contact" />
        <meta name="author" content="Somashekhar Chalavadi" />
      </Helmet>

      <Banner title={'Contact Us'} text={'  Got questions or need support? We’re just a message away.'} />
      <div className="pt-24  p-1 space-y-6">
        <div className="flex justify-center items-center ">

          <TabComponent />
        </div>
        <h2 className="md:text-xl text-sm text-center ">

          Got a query? Let us know, and we’ll respond promptly!
        </h2>
        <div className="flex justify-center items-center">

          <ContactPageMessage />{' '}
        </div>
      </div>
    </>
  );
};

export default Contact;
