import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import "./Login.css";

import { useState, useContext, createContext } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/users/userActions";
import store from "../../redux/store";
import { Navigate, useParams } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import { init_api, API } from "../../API";
import AuthContext from "./AuthContext";
import { UserContext } from '../App'

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 900,
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1446329360995-b4642a139973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhpZ2glMjByZXNvbHV0aW9uJTIwc2Nob29sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: 900,
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

function Login({ login, handleUserLogin }) {
  const { classes } = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const { userID, setUserID } = useContext(UserContext)
  
  
  const [id, setID] = useState(0);
  

  const loginPressed = async () => {
            //setAuth(true);
            // setUserID(store.getState().user.id); 
            
            init_api();
            const res = await API.post("/auth/jwt/create", {
            email: email,
            password: password
        });
        

        
            
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${res.data.access}`,
                    'Accept': 'application/json'
                }
            };
            
            
            init_api();
            await API.get('/auth/users/me/', config)
            .then((response) => {
              console.log("RESPONSE WITH" + response.data.id)
              
             
            
              setUserID(response.data.id)
            
            });
            //console.log(store.getState().user.id);
            setAuth(true);
            
         
  };

  
  return (
    <AuthContext.Consumer>
  {({ auth, setAuth }) => (
    <div>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt={100}
            mb={40}
          >
            Welcome back to MyNext4!
          </Title>

          <TextInput
            label="Email address"
            size="md"
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
          <PasswordInput
            label="Password"
            mt="md"
            size="md"
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
          <Button fullWidth mt="xl" size="md" onClick={loginPressed}>
            Login
          </Button>
        </Paper>
      </div>
      <div className="root-login">
        <Nav />

        {auth && <Navigate to={`/Dashboard/${userID}`} />}
      </div>
    </div>
  )}
</AuthContext.Consumer>

  );
}

export default connect(null, { login })(Login);
