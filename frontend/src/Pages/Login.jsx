import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from '../Context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (currentState === 'Sign Up') {
        response = await axios.post(
          backendUrl + '/api/user/register',
          { name, email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);

          toast.success('Account created successfully!');
        } else {
          toast.error(response.data.message);
        }

      } else {
        response = await axios.post(
          backendUrl + '/api/user/login',
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);

          toast.success('You successfully logged in!');
        } else {
          toast.error(response.data.message);
        }
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#d4a257]'
    >
      {/* Heading */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name */}
      {currentState === 'Sign Up' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full bg-black px-3 py-2 border border-gray-300 text-gray-300 outline-none focus:border-[#d4a257] placeholder:text-gray-300'
          type="text"
          placeholder='Name'
          required
        />
      )}

      {/* Email */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className='w-full bg-black px-3 py-2 border border-gray-300 text-gray-300 outline-none focus:border-[#d4a257] placeholder:text-gray-300'
        type="email"
        placeholder='Email'
        required
      />

      {/* Password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className='w-full bg-black px-3 py-2 border border-gray-300 text-[#d4a257] outline-none focus:border-[#d4a257] placeholder:text-gray-300 mb-5'
        type="password"
        placeholder='Password'
        required
      />

      {/* Links */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-gray-300'>
          Forgot your password?
        </p>

        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className='cursor-pointer font-medium text-gray-300'
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className='cursor-pointer font-medium text-gray-300'
          >
            Login
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className='w-32 bg-black border border-[#d4a257] text-[#d4a257] py-2 mt-4 hover:bg-gray-800 transition-all mb-5'
      >
        {currentState === 'Login' ? 'Sign in' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;

// import React, { useContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { ShopContext } from '../Context/ShopContext';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const [currentState, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       if (currentState === 'Sign Up') {
//         const response = await axios.post(
//           backendUrl + '/api/user/register',
//           { name, email, password }
//         );

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }

//       } else {
//         const response = await axios.post(
//           backendUrl + '/api/user/login',
//           { email, password }
//         );

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem('token', response.data.token);
//         } else {
//           toast.error(response.data.message);
//         }
//       }

//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       navigate('/');
//     }
//   }, [token]);

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#d4a257]'
//     >

//       {/* Heading */}
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
//       </div>

//       {/* Name (only signup) */}
//       {currentState === 'Sign Up' && (
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         className='w-full bg-black px-3 py-2 border border-gray-300 text-gray-300 outline-none focus:outline-none focus:ring-0 focus:border-[#d4a257] placeholder:text-gray-300'
//           type="text"
//           placeholder='Name'
//           required
//         />
//       )}

//       {/* Email */}
//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         value={email}
//         className='w-full bg-black px-3 py-2 border border-gray-300 text-gray-300 outline-none focus:outline-none focus:ring-0 focus:border-[#d4a257] placeholder:text-gray-300'
//         type="email"
//         placeholder='Email'
//         required
//       />

//       {/* Password */}
//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         value={password}
//         className='w-full bg-black px-3 py-2 border border-gray-300 text-[#d4a257] outline-none focus:outline-none focus:ring-0 focus:border-[#d4a257] placeholder:text-gray-300 mb-5'
//         type="password"
//         placeholder='Password'
//         required
//       />

//       {/* Links */}
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer text-gray-300'>Forgot your password?</p>

//         {currentState === 'Login' ? (
//           <p
//             onClick={() => setCurrentState('Sign Up')}
//             className='cursor-pointer font-medium text-gray-300'
//           >
//             Create Account
//           </p>
//         ) : (
//           <p
//             onClick={() => setCurrentState('Login')}
//             className='cursor-pointer font-medium'
//           >
//             Login
//           </p>
//         )}
//       </div>

//       {/* Button */}
//       <button
//         type="submit"
//         className='w-32 bg-black border border-[#d4a257] text-[#d4a257] py-2 mt-4 hover:bg-gray-800 transition-all mb-5'
//       >
//         {currentState === 'Login' ? 'Sign in' : 'Sign Up'}
//       </button>

//     </form>
//   );
// };

// export default Login;


