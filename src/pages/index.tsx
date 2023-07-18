/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
import type { NextPage } from 'next';
import { useState } from 'react';
import { signUpSchema } from '@/schemas';
import { SignUpInformation } from '@/types';
import TextInput from '@/components/TextInput';

const Home: NextPage = () => {
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>([]);
  const [signUpInformation, setSignUpInformation] = useState<SignUpInformation>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    terms: false
  });

  const handleTextInputChange = (event: any) => {
    console.log("ran")
    setSignUpInformation({ ...signUpInformation, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("signUpInformation", signUpInformation);
    const parsedSignUpSchema = signUpSchema.safeParse(signUpInformation);
    if (!parsedSignUpSchema.success) {
      setErrors(parsedSignUpSchema.error)
      setIsSuccessful(false)
      console.log("error", errors)
    } else {
      setIsSuccessful(true)
      setErrors([])
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container flex flex-wrap px-4 py-8">
        <a
          href="https://samuelnicholls.dev/"
          aria-label="Link to portfolio"
          target="_blank"
          className="flex items-center border-2 p-2 border-black"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
            SN
          </span>
        </a>
      </div>
      <div className='px-4'>
        <h2 className="text-4xl font-extrabold">Sign Up</h2>
        <form>
          <div className='flex flex-row mt-8'>
            <div className='mr-8'>
              <TextInput id="firstName" value={signUpInformation.firstName} label="First name" name="firstName" placeholder="John" type="text" onChange={handleTextInputChange} errors={errors} />
            </div>
            <div>
              <TextInput id="lastName" value={signUpInformation.lastName} label="Last name" name="lastName" placeholder="Doe" type="text" onChange={handleTextInputChange} />
            </div>
          </div>
          <div className='mt-8'>
            <TextInput id="emailAddress" value={signUpInformation.emailAddress} label="Email address" name="emailAddress" placeholder="john.doe@company.com" type="email" onChange={handleTextInputChange} />
          </div>
          <div className='mt-8'>
            <TextInput id="password" value={signUpInformation.password} label="Password" name="password" placeholder="•••••••••" type="password" onChange={handleTextInputChange} />
          </div>
          <div className='mt-8'>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
              </div>
              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
            </div>
            </div>
          <div>
            <button className='border-2' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
