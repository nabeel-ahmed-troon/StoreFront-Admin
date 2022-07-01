// // import * as React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Box from '@mui/material/Box';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// //====================================
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { useState,useEffect } from 'react';
// import {login as signIn,logout} from "../NearProvider/utils";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));

// export default function ButtonAppBar() {
//     const [login, setLogin] = useState("Connect Wallet");
//     const [accountId, setAccountId] = useState("Not Connected");
//     const [connected, setConnected] = useState("Not Connected");
//     useEffect(() => {
//       if (window.walletConnection.isSignedIn()) {
//         let id = window.walletConnection.getAccountId();
//         setAccountId(id);
//         let res = accountId;
//         setConnected(res);
//       }
//     }, []);
//     useEffect(() => {
//       if (window.walletConnection.isSignedIn()) {
//         setLogin("Logout");
//       }
//     }, []);
  
//     const handleLogin = () => {
//       if (window.walletConnection.isSignedIn()) {
//         logout();
//         setLogin("Connect Wallet");
//       } else {
//         signIn();
//         setLogin("Logout");
//         let res = accountId;
//         setConnected(res);
//       }
//     };
//     const classes = useStyles();

//   return (
//       //================================================
//     // <Box sx={{ flexGrow: 1, width : '100%' }}>
//     //   <AppBar backgroundColor='#2C1775' position="static">
//     //     <Toolbar>
//     //       <Typography variant="h6" component="div" sx={{width : "210px"}}>
//     //         Drops Dapp
//     //       </Typography>
//     //       <Typography variant="p" component="div" sx={{width : "210px"}}>
//     //         Role: admin
//     //       </Typography>
//     //       <Box sx={{ display : 'flex' ,justifyContent : 'flex-end' ,width: '100%'}}>
//     //        <Typography component = "div" >{'Logged in as: '}{accountId}</Typography>: <Button color="inherit" sx={{display:"visible"}} onClick={signIn}>Connect Wallet</Button>

//     //       </Box>
          
//     //           <Button color="inherit" sx={{whiteSpace:'no-wrap',width:'10%'}} onClick={logout}>
//     //             Log Out
//     //           </Button>
       
//     //     </Toolbar>
//     //   </AppBar>
//     // </Box>
//     //=========================================================
//     <div className={classes.root}>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" className={classes.title}>
//           News
//         </Typography>
//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//   </div>
//   );
// }


//=========
//=========
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useState,useEffect } from 'react';
import {login as signIn,logout} from "../NearProvider/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [login, setLogin] = useState("Connect Wallet");
      const [accountId, setAccountId] = useState("Not Connected");
      const [connected, setConnected] = useState("Not Connected");
      useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
          let id = window.walletConnection.getAccountId();
          setAccountId(id);
          let res = accountId;
          setConnected(res);
        }
      }, []);
      useEffect(() => {
        if (window.walletConnection.isSignedIn()) {
          setLogin("Logout");
        }
      }, []);
    
      const handleLogin = () => {
        if (window.walletConnection.isSignedIn()) {
          logout();
          setLogin("Connect Wallet");
        } else {
          signIn();
          setLogin("Logout");
          let res = accountId;
          setConnected(res);
        }
      };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Store Front
          </Typography>
          <Button color="inherit" onClick={signIn}>{login}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
