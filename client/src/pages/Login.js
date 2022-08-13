import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation} from '@apollo/client';
import { LOGIN_USER } from '../mutations/mutations';


import Auth from '../auth/decode';
// import Button from "react-bootstrap/Button";


const Login = (props) => {
  let navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <>
    <main className="d-flex justify-content-center container-sm mb-4 mt-5 mainFont">
      <div className="col-12 col-lg-8">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="row d-flex justify-content-evenly" onSubmit={handleFormSubmit}>
                <input
                  className="form-input col-10"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input col-10 mt-2"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-info col-3 mt-2"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Log in
                </button>
                {/* Need to change to signup */}
                <button
                className="btn btn-block btn-success col-3 mt-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate("/signup")}
                >
               Sign up
              </button>
              </form>
            
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
          {/* End of card div */}
        </div>
      </div>
    </main>

    </>
  );
};

export default Login;




