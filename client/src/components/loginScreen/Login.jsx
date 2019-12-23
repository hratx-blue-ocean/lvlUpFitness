import React, { useState } from "react";
import { Hide, View } from "grommet-icons";

import { Box, TextInput, Button, Grommet } from "grommet";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reveal, setReveal] = useState(false);

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
    </Grommet>
  );
};

export default LogIn;
