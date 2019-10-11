import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.css';
import { calendarPath } from '../index';
import { TextField } from 'formik-material-ui';
import Button from '@material-ui/core/Button';
import Axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css'

const App = () => {
  return (
    <div
      className='loginForm'
    >
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          let errors:{username?:string, password?:string} = {};
          if (values.username =='') {
            errors.username = 'Username required';
          }
          if (values.password == '') {
            errors.password = 'Password required';
          }
          return(errors);
        }}
        onSubmit={
          (values, { setSubmitting }) => {
            setTimeout(() => {
              Axios.post(
                "http://localhost:3001/users",
                {
                  username: values.username,
                  password: values.password
                }
              ).then(
                (response) => {
                  console.log(response);
                }
              )
                .catch((error) => console.log(error));
              setSubmitting(false);
            }, 500);
          }
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <Field name='username' label='Username' component={TextField} />
            </div>
            <div>
              <Field name='password' label='Password' component={TextField} />
            </div>
            <div>
              <Button
                type='submit'
                disabled={isSubmitting}
              >
                Submit
            </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );

  // let usernameRef = React.createRef<HTMLInputElement>();
  // let pwRef = React.createRef<HTMLInputElement>();
  // let [loggedIn, setLoggedIn] = useState(false);

  // const login = () => {
  //   let username = "";
  //   let pw = "";
  //   if (usernameRef.current != null) {
  //     username = usernameRef.current.value;
  //   }
  //   if (pwRef.current != null) {
  //     pw = pwRef.current.value;
  //   }
  //   Axios.post(
  //     "http://localhost:3001/users",
  //     {
  //       username: username,
  //       password: pw
  //     }
  //   )
  //     .then(
  //       (response)=>{
  //         console.log(response);
  //         setLoggedIn(true);
  //       }
  //     )
  //     .catch((error)=>console.log(error));
  // }

  // if (loggedIn) {
  //   return <Redirect to={calendarPath}/>
  // }

  // return (
  //   <div className="App">
  //     <h2>
  //       <form>
  //         <div>
  //           <TextField
  //             id="username"
  //             label="Username:"
  //             className="loginInput"
  //             inputRef={usernameRef}
  //           />
  //         </div>
  //         <div>
  //           <TextField
  //             id="password"
  //             label="Password:"
  //             className="loginInput"
  //             type="password"
  //             inputRef={pwRef}
  //           />
  //         </div>
  //         <div>
  //           <Button
  //             variant="contained"
  //             onClick={login}
  //             className="loginButton">
  //             Login
  //         </Button>
  //         </div>
  //       </form>
  //     </h2>
  //   </div>
  // );
}

export default App;
