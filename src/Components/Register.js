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

const Register = () => {
  const { handleSubmit, register, errors, control } = useForm();
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <RegisterForm>
      <Container maxWidth="sm">
      <Grid container spacing={2}>
            <Grid item xs={12}>
                <ul>Register</ul>
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
                    label="username"
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
                    label="password"
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
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                as={<TextField variant="outlined"
                 fullWidth
                  label="yourmail@domain" 
                  required
                  />}
                name="email"
                control={control}
                defaultValue=""
              />
            </Grid>
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
