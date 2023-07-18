import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { useAuthContext } from '../hooks/useAuthContext';

const SignupPage = () => {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    // get the dispatch method from the useContext Hook
    const { dispatch } = useAuthContext();

    const [addUser] = useMutation(ADD_USER);

    const onSignup = async (data) => {
      const user = {
        firstName: data.firstName,
        surname: data.surname,
        email: data.email,
        password: data.password,
        contactNumber: "1234567890",
      };

      try {
        const mutationResponse = await addUser({
          variables: { user },
        });

        console.log("GraphQL Mutation Response:", mutationResponse);
        const userData = mutationResponse.data.addUser.user;
        const token = mutationResponse.data.addUser.token;

        //spread the user and token in a variable to set to local storage
        const loggedInUser = { ...userData, token: token };
        console.log(loggedInUser);

        if (loggedInUser) {
          localStorage.setItem("kickz", JSON.stringify(loggedInUser));
        }

        // if success redirect user to home page
        window.location.replace("/");

        // dispatch the user and token to the reducer
        dispatch({ type: "LOGIN", payload: { user: loggedInUser } });
      } catch (err) {
        console.error("graphQL error", err);
      }
    };

    return (
        <div className='flex flex-col items-center w-full my-20'>
            <form onSubmit={handleSubmit(onSignup)} className='flex flex-col items-center md:w-4/5 lg:w-2/3 gap-3 bg-gray-200 rounded-3xl py-4 px-8' noValidate>
            <h1 className='text-3xl lg:text-4xl font-bold my-10'>Sign Up</h1>
            <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label className='text-xl font-bold' htmlFor="name">First Name</label>
                    <input className='text-xl p-1 rounded-xl ps-2 outline-none' type="text" name='firstname'
                    {...register('firstName', {
                        required: 'First Name is required',
                        minLength: {
                            value: 1,
                            message: 'Please enter your first name'
                        }})}
                    />
                    <p>{errors.text?.message}</p>
                </div>
                <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label className='text-xl font-bold' htmlFor="name">Surname</label>
                    <input className='text-2xl p-1 rounded-xl ps-2 outline-none' type="text" name='surname' 
                    {...register('surname', {
                        required: 'surname is required',
                        minLength: {
                            value: 1,
                            message: 'Please enter your surname'
                        }})}
                    />
                    <p>{errors.text?.message}</p>
                </div>
                <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label className='text-xl font-bold' htmlFor="email">Email</label>
                    <input className='text-2xl p-1 rounded-xl ps-2 outline-none' type="email" 
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Entered value does not match email format'
                        }})}
                    />
                    <p>{errors.email?.message}</p>
                </div>
                
                <div className='flex flex-col w-full md:w-4/5 lg:w-3/5 gap-3'>
                    <label className='text-xl font-bold' htmlFor="password">Password</label>
                    <input className='text-2xl p-1 rounded-xl ps-2 outline-none' type="password" 
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password must have at least 8 characters'
                        }})}                    
                    />
                    <p>{errors.password?.message}</p>
                    <button type='submit' className='w-1/3 my-5 bg-blue-600 px-5 py-2 text-white rounded-2xl hover:cursor-pointer'>Sign Up</button>
                </div>

            </form>
        </div>
    )
};

export default SignupPage;
