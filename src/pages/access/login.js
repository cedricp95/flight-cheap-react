import Layout from '../../components/layout/Layout'
import React, { useState } from 'react';
import {login} from '../../api/auth';
import Router from 'next/router'


import {
  Container,
  Grid,
  TextField,
  Button
} from "@mui/material";

export default function Login() {

  function submit() {
    login(username,password).then((res,req)=>{
        sessionStorage.setItem("token", res.data.token);
        Router.push('/dashboard')

    }).catch((e)=>{
      alert(e.response.data.detail)
    })
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
      <Layout type="auth">
        <Container>
          <Grid>
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={evt =>setUsername(evt.target.value)}/>
            <TextField id="outlined-basic" label="Password" variant="outlined" type="password" onChange={evt =>setPassword(evt.target.value)}/>
          </Grid>
          <Grid>
          </Grid>
          <Button onClick={submit}>Login</Button>
        </Container>
      </Layout>
  );
}
