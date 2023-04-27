import Layout from '../components/layout/Layout'
import  { useState,useEffect } from 'react';
import {
  Avatar,
  Link,
  Container,
  Typography,
  Toolbar,
  Box,
  Stack,
  Grid,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
  AppBar,
} from "@mui/material";

export default function Home() {
  const [isNotLogin, setNotLogin] = useState(false);




sdfsdf



  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setNotLogin(token===null);
  });
    return (
      <>
        <Layout type="auth">
            This is our home 
            
            {isNotLogin?
            <>
              <Link color="inherit" href="/access/login">
                Sign in 
              </Link>
            </>:
            <>
              <Link color="inherit" href="/dashboard">
                Proceed to dashboard 
              </Link>
            </>}

        </Layout>
      </>
    );
  }
