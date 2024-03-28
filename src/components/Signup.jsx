import { ArrowRight } from 'lucide-react';
import { BrandLogo, Input } from './index';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import authService from '../appwrite/authService';
import { login } from '../store/authSlice';
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm();

  const createAccount = async (data) => {
    setError('');
    try {
      const account = await authService.createUser(data);
      if (account) {
        const user = await authService.getCurrentUser();
        if (user) dispatch(login(user.userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <div className="flex items-center justify-center px-4 py-6 sm:px-6 sm:py-16  lg:px-8 lg:py-12">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            <BrandLogo size="80px" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">Sign up to create account</h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Already have an account?{' '}
            <Link to="/login" title="" className="font-semibold text-black transition-all duration-200 hover:underline">
              Sign In
            </Link>
          </p>
          <form onSubmit={handleSubmit(createAccount)} className="mt-8">
            <div className="space-y-5">
              <Input
                type="text"
                label="Name"
                placeholder="Name"
                {...register('name', { required: true, minLength: 3, maxLength: 30, pattern: /^[a-zA-Z\s]*$/ })}
              />
              <Input
                type="email"
                label="Email"
                placeholder="Email"
                {...register('email', {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      'Email address must be a valid address',
                  },
                })}
              />
              <div className="flex flex-col items-end">
                <Input
                  type="password"
                  label="Password"
                  placeholder="Password"
                  {...register('password', {
                    required: true,
                    // minLength: 8,
                    // maxLength: 20,
                    // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/,
                  })}
                />
                {/* TODO: add forget password functionality
                <a href="#" title="" className="text-sm font-semibold text-black hover:underline">
                  {' '}
                  Forgot password?{' '}
                </a> */}
              </div>
              {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Sign up <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
