import React, { useEffect, useState } from 'react';
import { connectionStatus } from '../../services/ApiArtemisBack';
import './ConnectionStatus.css';

const ConnectionStatus = () => {
     const [status, setStatus] = useState({
        message: '',
        error: null,
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
                console.error(err);
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
                <h2>Loading...</h2>
            </div>
        );
    }

    return (
        <div>
            {status.error ? (
                <h2 className="error-message">{status.error}</h2>
            ) : (
                <h2 className="success-message">{status.message}</h2>
            )}
        </div>
    );
};

export default ConnectionStatus;
