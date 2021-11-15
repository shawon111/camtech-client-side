import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { isLoading, adminStatus } = UseAuth();

    if(isLoading){
        return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress style={{width: '80px'}} />
      </Box>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        adminStatus ? ( 
            children
         ) : (<Redirect
            to={{
                pathname: '/unauthorized',
                state: {from : location}
            }}
            />)
        }
        >

        </Route>
    );
};

export default AdminRoute;