import ContactForm from '../../components/contactForm/contactForm';
import Heading from '../../components/heading';
import Text from '../../components/text';
import './index.css';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='content'>
          <Heading level={2}>Contact</Heading>
          <Text size='14px'>
            Questions or concerns? Just fill out the form below and our support team will get back
            to you within 24 hours
          </Text>
        </div>
        <div className='contact-form'>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
