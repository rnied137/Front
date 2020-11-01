import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import COLORS from "../colors";
import { db } from "../Firebase/firebase";
import LockIcon from "@material-ui/icons/Lock";
import LockOpen from "@material-ui/icons/LockOpen";
import {MoodIcon as SmileyFace} from '@material-ui/icons/Mood';


const RegisterForm = styled.div`
  padding: 20px;
  margin-top: 25px;
`;

const SignInLink = styled.div`
  padding: 10px;
  margin-top: 5px;

  a {
    text-decoration: none;
    color: ${COLORS.secondary};
    font-weight: 600;
  }
`;

const CircleIcon = styled.div`
background-color: ${COLORS.secondary};
border-radius:1%;
border:5px solid ${COLORS.secondary};
border-radius: 20px;
color: ${COLORS.primary};

`;

const Register = () => {
  const { handleSubmit, errors, control, watch } = useForm();
  const [confirmError, setConfirmError] = React.useState(null)

  const password = React.useRef({});
  password.current = watch("password", "");

  const onSubmit = (values) => {
    console.log('jjksubmituje');
    db.collection("users")
      .add({
        username: values.username,
        password: values.password,
        email: values.email,
        active: "false",
      })
      .then(function () {
        console.log("Success");
      })
      .catch(function (error) {
        console.log("Error", error);
      });
  };

  return (
    <RegisterForm>
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CircleIcon>
              <LockIcon/>
            </CircleIcon>

            <ul>Register</ul>
            {errors.password && (<p>blad</p>)}
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    label="Username"
                  />
                }
                name="username"
                control={control}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    variant="outlined"
                    fullWidth
                    required
                    label="Password"
                  />
                }
                name="password"
                control={control}
                defaultValue=""
                
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="repeat Password"
                    required
                  />
                }
                name="repeatPassword"
                control={control}
                defaultValue=""
                rules={{
                    validate: (value) => value === password.current ||  "Password do not match!",
                    message: "Passwords do not match!",


                    

                }}
              />
            </Grid>
              {errors.repeatPassword && (<Grid item xs={12}><span><p>{password.current}</p>{errors.repeatPassword.message}</span></Grid>)}


            {errors.password && (
              <Grid item xs={12}>
                <span>Password looks suspicious!</span>
              </Grid>
            )}
            <Grid item xs={12}>
              <Controller
                as={
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="yourmail@domain"
                    required
                  />
                }
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  pattern: {
                    required: true,
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }
                }}
              />
            </Grid>
            {errors.email && (
              <Grid item xs={12}>
                <span>Email looks wrong to me!</span>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid item xs={12}>
          <SignInLink>
            Already have an account?
            <ul>
              <Link to="/">Sign in here !</Link>
            </ul>
          </SignInLink>
        </Grid>
      </Container>
    </RegisterForm>
  );
};

export default Register;
