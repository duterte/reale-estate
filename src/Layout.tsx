import React, { FC, /* createContext */ } from 'react';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

// import { io, Socket } from 'socket.io-client';

import LoginModal from './components/login/LoginModal'

const theme = createTheme({
  palette: {
    primary: {
      light: '#3ba2f5',
      main: '#2196f3',
      dark: '#0d8df3',
      contrastText: '#fff'
    },
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    backgroundImage: 'url("/img/mega-city.jpg")'
  },
  toolbar: {
    color: '#000'
  },
  appBar: {
    backgroundColor: '#e3f2fd'
  },
}));

// export const SocketIO = createContext<Socket>(io())

const Layout: FC = (props) => {
  const classes = useStyles();

  return (
    // <SocketIO.Provider value={io()}>
    <ThemeProvider theme={theme}>
      <Container className={classes.root} component="header">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton className={classes.toolbar}>
              <MenuIcon />
            </IconButton>
            <Button color="primary" variant="contained">Login</Button>
          </Toolbar>
        </AppBar>
        <Modal
          open={true}
          onClose={() => { }}
        >
          <><LoginModal /></>
        </Modal>
      </Container>
    </ThemeProvider>
    // </SocketIO.Provider>
  )
}

export default Layout;
