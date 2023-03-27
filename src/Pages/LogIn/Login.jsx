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
import { init_api, API } from "../../API";
import AuthContext from "./AuthContext";
import { UserContext } from '../App'



function Login({ login, handleUserLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useContext(AuthContext);
  const { userID, setUserID } = useContext(UserContext)
  const [id, setID] = useState(0);
  
  const loginPressed = async () => {
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
            await API.get('/auth/users/me/', config)
            .then((response) => {

              setUserID(response.data.id)
            
            });
          
            setAuth(true);
            
         
  };

  
  return (
    <AuthContext.Consumer>
  {({ auth, setAuth }) => (
    <div>
      <div style={{margin: 30}} >
        <Paper  radius={0} p={30} shadow="lg">
        <div className="course-field-tag" style={{textAlign: 'center', fontWeight: 400, fontSize: '36px', marginBottom: 4, marginTop: 4, color: 'gray'}}> Welcome </div>

          <TextInput
            label="Email address"
            size="md"
            value={email}
            style={{width: '50%', margin: '0 auto 0 auto'}}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
          <PasswordInput
            label="Password"
            mt="md"
            size="md"
            style={{width: '50%', margin: '0 auto 0 auto'}}
            value={password}
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button style={{width: '250px', margin: '30px auto 0 auto', }} mt="xl" size="lg" onClick={loginPressed}>
            Log In
          </Button>
          </div>
        </Paper>
      </div>
      <div className="root-login">
     

        {auth && <Navigate to={`/Dashboard/${userID}`} />}
      </div>
    </div>
  )}
</AuthContext.Consumer>

  );
}

export default connect(null, { login })(Login);
