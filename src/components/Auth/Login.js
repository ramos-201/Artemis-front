import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
    return (
        <Container 
            component="main" 
            maxWidth="xs" 
            style={{
                height: '100vh', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '0',
            }}
        >
            <Paper elevation={3} style={{ 
                padding: '20px', 
                width: '100%', 
                margin: '0 16px',
            }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Iniciar Sesión
                </Typography>
                
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        autoComplete="email"
                        autoFocus
                    />
                    
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                    />
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                    >
                        Iniciar Sesión
                    </Button>
                    
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginTop: '16px', 
                        flexWrap: 'wrap',
                    }}>
                        <Typography variant="body2" align="center" style={{ marginRight: '8px' }}>
                            ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
                        </Typography>
                    
                        <Typography variant="body2" align="center">
                            <a href="/recover">¿Olvidaste tu contraseña?</a>
                        </Typography>
                    </div>
                </form>
            </Paper>
        </Container>
    );
}

export default Login;
