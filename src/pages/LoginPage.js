import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import {
  Divider, TextField,
  Typography,
  Container,
  Link,
  Box,
  Checkbox,
  Button,
  Avatar,
  CssBaseline,
  Stack, IconButton, InputAdornment
} from '@mui/material';
import DropdownUI from '../sections/auth/login/DropdownUI';

import useResponsive from '../hooks/useResponsive';
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import { LoginForm } from '../sections/auth/login';




const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 5, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}



        <Container maxWidth="sm" sx={{
          alignItems: 'center',
        }}>
          <StyledContent>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h4" gutterBottom >
              Sign in to Fest-In-Peace
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Don’t have an account? {''}
              <Link variant="subtitle2">Get started</Link>
            </Typography>
            <Stack direction="row" spacing={2} marginBottom={1}>
              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
              </Button>

              <Button fullWidth size="large" color="inherit" variant="outlined">
                <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
              </Button>
            </Stack>
            <Box display="flex" justifyContent="center" alignItems="center">
              <DropdownUI />
            </Box>


            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                OR
              </Typography>
            </Divider>
            <LoginForm />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}

// Redirect to the Home page after a successful login
