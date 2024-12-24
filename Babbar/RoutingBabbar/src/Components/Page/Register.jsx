import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data){
    //Api call ko simulate karte hai
    await new Promise ((resolve) => setTimeout(resolve,5000));
    console.log("submitting the form",data);
  }
  
  return (
    // <div className="min-h-[400px]  mb-24 mt-4 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-2">
        
      <div className="bg-white h-[500px] md:mx-auto rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Register</h2>
       <div className='border border-black'> {isSubmitting && <div className='text-black'>Loading...</div>}</div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>

         
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Username
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required',
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/
,
                  message: ' at least one uppercase letter,one lowercase letter,one numeric digit,one special character minimum length 10..(sorry its necessary for your unique username)',
                },

               })}
              className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none ${{
                'border-red-500': errors.name,
              }}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none ${{
                'border-red-500': errors.email,
              }}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
         
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
,
                  message: ' at least one uppercase letter,one lowercase letter,one numeric digit,one special character ',
                },
                minLength:{
                  value:8,
                  message:'minimum 8 character using at least one uppercase letter,one lowercase letter,one numeric digit,one special character and other character'
                }
              })}
              className={`w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none ${{
                'border-red-500': errors.password,
              }}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <input
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2" 
            disabled={isSubmitting }
        value={isSubmitting? "submitting" :"submit" }
          />
            
          
        </form>
      </div>
    // </div>
  );
};

export default Register;
