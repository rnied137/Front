import React, { useState } from "react";
import styled from "styled-components";

import { TextField, Button } from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import COLORS from "../colors";

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  form {
    display: flex;

    Button {
      background: ${COLORS.primary};
    }
  }

  .elements {
    display: flex;
  }
  .element {
    padding: 20px;
    line-height: 1.5;
  }
`;

const UsersArray = [
  {
    name: "radek",
    avatar: "test",
    password: "pass",
  },
  {
    name: "julek",
    avatar: "test2",
    password: "12345",
  },
];

const Users = () => {
  const [name, setName] = useState("Username");
  const [users, setUsers] = useState(UsersArray);
  console.log(users);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#6c63ff",
      },
      secondary: {
        main: "#ff6584",
      },
    },
  });

  const returnUsers = (event) => {
    event.preventDefault();
    console.log("got x users");
    const test = {
      name: "1",
      avatar: "2",
      password: "3",
    };

    setUsers(users.concat(test));
  };

  const setSearchUserName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <React.Fragment>
      <StyledForm>
        <form>
          <MuiThemeProvider theme={theme}>
            <TextField id="filled-basic" variant="filled" label="Username" />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </MuiThemeProvider>
        </form>
      </StyledForm>
    </React.Fragment>
  );
};

export default Users;
