import React, { useState } from "react";
import styled from "styled-components";

import { TextField, Button, Paper } from "@material-ui/core";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Skeleton from "@material-ui/lab/Skeleton";

import COLORS from "../colors";

import Grid from "@material-ui/core/Grid";

const StyledForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  Paper {
    border-radius: 50%;
  }
  .avatar {
    border-radius: 50%;
    width: 150px;
  }

  form {
    display: flex;
    justify-content: center;
    padding: 20px;

    Button {
      background: ${COLORS.primary};
    }

    TextField {
      min-width: 150px;
    }

    .text-field {
      min-width: 180px;
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
    avatar:
      "https://gravatar.com/avatar/9ede50f02d6bf3c07bfd21ca2a4a276b?s=400&d=robohash&r=x",
    password: "pass",
  },
  {
    name: "julek",
    avatar:
      "https://gravatar.com/avatar/9883d4b93141cf50a4c15dbc6c7b590b?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "ania",
    avatar:
      "https://gravatar.com/avatar/394e17866d1c7d761c7d878ed0e8e835?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "tosia",
    avatar:
      "https://gravatar.com/avatar/fff6c4713791cceab5fde246ac685fc2?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "tola",
    avatar:
      "https://gravatar.com/avatar/4e6333f96ea58e501fde7621ba2f8dac?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "jola",
    avatar:
      "https://gravatar.com/avatar/b47039e402b62b3dc760461cd6c7d534?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "ferdynand",
    avatar:
      "https://gravatar.com/avatar/57153047858fb0c429c5c18ffca866cc?s=400&d=robohash&r=x",
    password: "12345",
  },
  {
    name: "dominik",
    avatar:
      "https://gravatar.com/avatar/6167aed3f702ceb1b092944cf886f211?s=400&d=robohash&r=x",
    password: "12345",
  },
];

const Users = () => {
  const [name, setName] = useState("Username");
  const [users, setUsers] = useState(UsersArray);
  const [showedUsers, setShowedUsers] = useState(UsersArray);
  const [loading, setLoading] = useState(true);
  const anchorRef = React.useRef(null);
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

  const filterUsers = (event) => {
    const tab = [];
    const searchUser = event.currentTarget.value;
    if (searchUser === null || searchUser === "") setShowedUsers(users);
    else {
      showedUsers.filter((user) => {
        if (user.name.includes(searchUser)) tab.push(user);
      });
      setShowedUsers(tab);
    }
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <StyledForm>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} justify="center" alignItems="center">
            <form>
              <MuiThemeProvider theme={theme}>
                <ButtonGroup
                  variant="contained"
                  color="primary"
                  ref={anchorRef}
                  aria-label="split button"
                >
                  <Autocomplete
                    id="free-solo-demo"
                    disableClearable
                    freeSolo
                    options={users.map((option) => option.name)}
                    renderInput={(params) => (
                      <TextField
                        onChange={filterUsers}
                        {...params}
                        className="text-field"
                        id="filled-basic"
                        variant="filled"
                        label="Search term.."
                        InputProps={{ ...params.InputProps, type: "search" }}
                        autoComplete="true"
                      />
                    )}
                  />
                  <Button variant="contained" color="primary">
                    Search
                  </Button>
                  <Button variant="contained" color="primary">
                    <DeleteForeverIcon />
                  </Button>
                  <Button
                    color="primary"
                    size="small"
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                  >
                    <ArrowDropDownIcon />
                  </Button>
                </ButtonGroup>
              </MuiThemeProvider>
            </form>
          </Grid>
          {showedUsers.map((user) => {
            return (
              <Grid item xs={4}>
                {" "}
                <Paper variant={"outlined"} elevation={3}>
                  <h1>{user.name}</h1>
                  <img className="avatar" src={user.avatar} alt="avatar" />
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </StyledForm>
    </React.Fragment>
  );
};

export default Users;
