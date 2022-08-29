import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const PasswordResetPage = () => {
   
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const onSubmitClicked = async () => {
        try {
            await axios.post('/api/reset-password/', {
                email: email
            });
            setSuccess(true);
            setTimeout(() => {
            navigate.push('/login');
        }, 3000);
        }catch(e) {
            setError(e.message);
        };
    }; 
    
    return success ?(
        <div className="container"><h1>Success</h1>
        <p>Check your email for a password reset link</p></div>
    ) : (
        <div className="container"><h1>
            Forgot password
        </h1>
        <p>Enter your email address to recover your password</p>
        {error &&<div className='error-message'>{error}</div>}
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address"/>
        <button type= 'button' onclick={onSubmitClicked}>Reset Link</button>
        </div>
    );
};