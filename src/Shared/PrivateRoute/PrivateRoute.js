import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress style={{width: '80px'}} />
      </Box>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email ? ( 
            children
         ) : (<Redirect
            to={{
                pathname: '/login',
                state: {from : location}
            }}
            />)
        }
        >

        </Route>
    );
};

export default PrivateRoute;