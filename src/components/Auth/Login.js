import React, { useState } from 'react';
import {
    Container,
    TextField,
    Button,
    Typography,
    Paper,
    DialogTitle,
    DialogContent,
    DialogActions, Dialog
} from '@mui/material';
import {loginConn} from "../../services/ApiArtemisBack";
import * as Yup from 'yup';


const Login = () => {
    
   const [dialogError, setDialogError] = useState('');
   const [loginError, setLoginError] = useState('');
       
    const onSubmit = async (data) => {
        Yup.object().shape({email: Yup.string().email('El formato del correo es incorrecto').required('El correo es requerido'), password: Yup.string().required('La contraseña es requerida'),});
        setLoginError('');
        setDialogError('');
        
         try {
             const response = await loginConn(data.email, data.password);
             if (response.message) {
                 console.log("Login success", response)
             } else if (response.error) {
                 if (response.error === "Invalid credentials") {
                     setLoginError('Credenciales inválidas. Por favor verifica tu correo y contraseña.');
                 } else {
                     setLoginError(response.error || 'Error desconocido')
                 }
             } else {
                 setDialogError('Hubo un error en el sistema. Por favor intenta más tarde.');
             }
        } catch (error) {
             setDialogError('Error al conectar con el servidor. Por favor intenta más tarde.');
        }
    };

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

                <form noValidate onSubmit={handleSubmit(onSubmit)}>                                                                                                                                                                                                                                                                                                                                         
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        {...register('password')}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        autoComplete="current-password"
                    />

                    {loginError && (
                        <Typography color="error" align="center" className={classes.loginError}>
                            {loginError}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
                    </Button>

                    <div className={classes.linksContainer}>
                        <Typography variant="body2" align="center" className={classes.linkItem}>
                            ¿No tienes una cuenta? <a href="#">Regístrate aquí</a>
                        </Typography>

                        <Typography variant="body2" align="center" className={classes.linkItem}>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </Typography>
                    </div>
                </form>
            </Paper>

            <Dialog open={Boolean(dialogError)} onClose={() => setDialogError('')}>
                <DialogTitle>Error en el sistema</DialogTitle>
                <DialogContent>
                    <Typography>{dialogError}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogError('')} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default Login;
