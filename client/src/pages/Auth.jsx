import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { Button } from '@chakra-ui/react';
import Auth from '../utils/auth';
import { LOGIN, ADD_USER } from '../utils/mutations';

// const Profile = () => {
//   const { username: userParam } = useParams();
//   const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
//     variables: { username: userParam },
//   });
//   const user = data?.me || data?.user || {};
//   if (
//     Auth.loggedIn() &&
//     /* TODO: Check if the user's username is strictly equal to the userParam variable's value */
//   ) {
//     return <Navigate to="/me" />;
//   }
//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   if (!user?.username) {
//     return (
//       <h4>
//         You need to be logged in to see this. Use the navigation links above to
//         sign up or log in!
//       </h4>
//     );
//   }

function AuthPage() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [isLogin, setIsLogin] = useState(false);
  const [login] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isLogin) {
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const mutationResponse = await addUser({
          variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
          },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode); // Toggle between login and signup mode
    setFormState({ email: '', password: '', firstName: '', lastName: '' }); // Reset form fields
  };

  return (
    <div className="container my-1">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <>
            <div className="flex-row space-between my-2">
              <label className="signup" htmlFor="firstName">First Name:</label>
              <input
                placeholder="First"
                name="firstName"
                type="text"
                id="firstName"
                value={formState.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label className="signup" htmlFor="lastName">Last Name:</label>
              <input
                placeholder="Last"
                name="lastName"
                type="text"
                id="lastName"
                value={formState.lastName}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <div className="flex-row space-between my-2">
          <label className="signup" htmlFor="email">Email:</label>
          <input
            placeholder="Your email"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label className="signup" htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </div>
      </form>
      <Button onClick={toggleMode}>
        {isLogin ? 'Need to Sign Up?' : 'Already have an account? Login'}
      </Button>
    </div>
  );
}

export default AuthPage;