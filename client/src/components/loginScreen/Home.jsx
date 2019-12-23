import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Hide, View, Login, Logout } from "grommet-icons";
import { Box, TextInput, Button, Grommet } from "grommet";

const Home = () => {
  const [newUser, setNewUserStatus] = useState(false);
  const [signIn, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);

  console.log(newUser, signIn, email, password, reveal);
  useEffect(() => {
    return () => {};
  }, []);

  if (newUser === true) {
    return <Redirect push to="/SignUp" />;
  } else if (signIn === true) {
    return <Redirect push to="/SignIn" />;
  } else {
    return (
      <Grommet>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          round="small"
          border
        >
          <TextInput
            plain
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Box>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          round="small"
          border
        >
          <TextInput
            plain
            type={reveal ? "text" : "password"}
            value={password}
            onChange={event => setPassword(event.target.value)}
          />

          <Button
            icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
            onClick={() => setReveal(!reveal)}
          />
        </Box>
        <Box
          width="medium"
          direction="row"
          margin="large"
          align="center"
          round="small"
        >
          <Button
            label="Sign-In"
            color="transparant"
            icon={<Login />}
            onClick={() => {
              setLogin(true);
            }}
            primary
          />
          <Button
            label="Sign-Up"
            color="transparant"
            icon={<Logout />}
            onClick={() => {
              setNewUserStatus(true);
            }}
            primary
          />
        </Box>
      </Grommet>
    );
  }
};

export default Home;
