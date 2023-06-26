/* eslint-disable no-console */
import type { NextPage } from 'next';
import { useState } from 'react';
import { signUpSchema } from '@/schemas';
import { SignUpInformation } from '@/types';

const Home: NextPage = () => {
  const [signUpInformation, setSignUpInformation] = useState<SignUpInformation>({
    firstName: "",
    lastName: "",
  });

  const handleChange = (event: any) => {
    setSignUpInformation({ ...signUpInformation, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const parsed = signUpSchema.safeParse(signUpInformation);
    if (parsed.success) {
      console.log("signUpSchema.safeParse.successs", parsed)
    } else {
      console.log("signUpSchema.safeParse.error", parsed)
    }
    console.log("signUpInformation", signUpInformation);
  };

  return (
    <div className="container mx-auto">
      <h1>Sign-Up Form</h1>
      <form>
      <div className='mt-8'>
        <label htmlFor="firstName">First Name: </label>
        <input className='border-2' type="text" id="firstName" name="firstName" value={signUpInformation.firstName} onChange={handleChange}  /> 
      </div>
      <div className='my-8'>
        <label htmlFor="lastNameName">Last Name: </label>
        <input className='border-2' type="text" id="lastName" name="lastName" value={signUpInformation.lastName} onChange={handleChange} /> 
      </div>
        <div>
          <button className='border-2' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Home;
