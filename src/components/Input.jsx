import React from 'react';
import useInput from '../hooks/useInput';

const Input = () => {
  const username = useInput('');
  const password = useInput('');

  return (
    <div>
      <input {...username} type="text" placeholder="Username" />
      <input {...password} type="text" placeholder="Password" />
      <button onClick={() => console.log(username.value, password.value)}>
        Click me
      </button>
    </div>
  );
};

export default Input;
