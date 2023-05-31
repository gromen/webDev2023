import { useReducer } from 'react';
import FormInput from '../formInput';
import { formReducer, initialState } from '../../reducers/formReducer';
import Button from '../button';

const ContactForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const onChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={onSubmitForm} className='contact-form'>
      <div className='input-group'>
        <FormInput
          onChange={onChange}
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First name'
          value={state.firstName}
          required={true}
        />
        <FormInput
          onChange={onChange}
          type='text'
          id='lastName'
          name='lastName'
          placeholder='Last name'
          value={state.lastName}
          required={true}
        />
      </div>
      <FormInput
        onChange={onChange}
        style='full'
        type='tel'
        id='phone'
        name='phone'
        placeholder='Phone Number'
        value={state.phone}
        required={true}
      />
      <FormInput
        onChange={onChange}
        style='full'
        type='text'
        id='message'
        name='message'
        placeholder='What service are you interested in?'
        value={state.message}
      />
      <Button variant='secondary' type='submit'>
        Submit Now
      </Button>
    </form>
  );
};

export default ContactForm;
