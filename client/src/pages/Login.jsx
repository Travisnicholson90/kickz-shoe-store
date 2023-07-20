import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const LoginPage = () => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const [loginUser] = useMutation(LOGIN_USER);

    const onLogin = async (data) => {
        const email = data.email;
        const password = data.password;

        try {
            const mutationResponse = await loginUser({
                variables: { email, password },
            });

            console.log("GraphQL Mutation Response:", mutationResponse);
            const userData = mutationResponse.data.login.user;
            const token = mutationResponse.data.login.token;
    
            //spread the user and token in a variable to set to local storage
            const loggedInUser = { ...userData, token: token };

            Auth.login(loggedInUser.token);
    
          } catch (err) {
            console.error("graphQL error", err);
          }
        };
    
        
    return (
        <div className='flex flex-col items-center w-full my-20'>
            <form onSubmit={handleSubmit(onLogin)} className='flex flex-col items-center md:w-4/5 lg:w-2/3 gap-7 bg-gray-200 rounded-3xl py-16 px-8'>
            <h1 className='text-2xl lg:text-4xl font-bold my-10'>Login</h1>
                <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label htmlFor="email">Email</label>
                    <input className='text-2xl p-1 rounded-xl ps-2 outline-none' type="email" 
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Entered value does not match email format'
                        }
                    })}
                    />
                    {errors.email?.message}
                </div>
                <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label htmlFor="password">Password</label>
                    <input className='text-2xl p-1 rounded-xl ps-2 outline-none' type="password" 
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must have at least 8 characters'
                        }})}
                    />
                    <button type='submit' className='w-1/3 my-5 bg-blue-600 px-5 py-2 text-white rounded-2xl hover:cursor-pointer'>Login</button>
                    <p className='italic'>Dont have an acoount with Kickz?
                        <Link to='/signup'><span className='ml-5 text-blue-600 hover:cursor-pointer'>Sign Up Here!!</span></Link>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default LoginPage;