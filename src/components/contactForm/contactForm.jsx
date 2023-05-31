import { useState } from 'react';
import FormInput from '../formInput';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log({ firstName, lastName, phone, message });
  };

  return (
    <form onSubmit={onSubmitForm} className='contact-form'>
      <div className='input-group'>
        <FormInput
          onChange={(event) => setFirstName(event.target.value)}
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First name'
          value={firstName}
          required={true}
        />
        <FormInput
          onChange={(event) => setLastName(event.target.value)}
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last name'
          value={lastName}
          required={true}
        />
      </div>
      <FormInput
        onChange={(event) => setPhone(event.target.value)}
        style='full'
        type='tel'
        id='phone'
        name='phone'
        placeholder='Phone Number'
        value={phone}
        required={true}
      />
      <FormInput
        onChange={(event) => setMessage(event.target.value)}
        style='full'
        type='text'
        id='text'
        name='text'
        placeholder='What service are you interested in?'
        value={message}
      />
      <button className='btn' type='submit'>
        Submit Now
      </button>
    </form>
  );
};

export default ContactForm;
