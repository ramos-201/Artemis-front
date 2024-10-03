import React, { useEffect, useState } from 'react';
import { connectionStatus } from '../../services/ApiArtemisBack';
import { Typography } from '@mui/material';


const ConnectionStatus = () => {
    const [status, setStatus] = useState({
        message: '', 
        error: null, 
        loading: true,
    });
    
    useEffect(() => {
        let isMounted = true;
        
        const fetchConnectionStatus = async () => {
            try {
                const data = await connectionStatus();
                if (isMounted) {
                    setStatus({
                        loading: false, 
                        message: data.message,
                        error: null,
                    });
                }
            } catch (err) {
                if (isMounted) {
                    setStatus({
                        loading: false,
                        message: '',
                        error: 'A connection error occurred',
                    });
                }
            }
        };
        fetchConnectionStatus().then(r => {});
        return () => {
            isMounted = false;
        }}, []
    );
    
     if (status.loading) {
        return (
            <div>
                <Typography variant="h6">Loading...</Typography>
            </div>
        );
    }

    return (
        <div>
            {status.error ? (
                <Typography variant="h5" color="error.main">
                    {status.error}
                </Typography>
            ) : (
                <Typography variant="h5" color="success.main">
                    {status.message}
                </Typography>
            )}
        </div>
    );
};

export default ConnectionStatus;
