import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import { auth, signInWithEmailAndPassword } from '../firebase/firebaseConfig'; // Import Firebase functions

export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent form refresh on submit

    try {
      // Firebase Authentication: sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);

      // Prepare user data to save in the state and localStorage
      const data = {
        name: user.displayName,  // You can set this depending on your Firebase settings
        email: user.email,
        uid: user.uid,
      };

      // Save user info to context and localStorage
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));

      // Redirect to the previously requested page or home
      navigate(redirect || '/');
    } catch (err) {
      // Handle errors (incorrect email/password, etc.)
      const errorMessage = err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password'
        ? 'Invalid email or password'
        : 'Error during sign-in: ' + err.message;
      toast.error(errorMessage);
    }
  };

  // Redirect to the desired page if the user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit" className="sign-in-button">
            Sign In
          </Button>
        </div>
        <div className="mb-3">
          New customer? {''}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}
