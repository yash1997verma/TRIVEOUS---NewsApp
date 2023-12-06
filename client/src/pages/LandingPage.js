import React, { useEffect } from 'react';
import { useAuthStatus } from '../hooks/useAuthStatus';
import { useNavigate } from 'react-router';

export default function LandingPage() {
    const navigate = useNavigate();
    const { loggedIn, checkingStatus } = useAuthStatus();
   
    useEffect(() => {
        if (loggedIn) {
        navigate('/privateRoutes/home');
        }
    }, [loggedIn, navigate]);

    if (!checkingStatus) {
        return <div>LandingPage</div>;
    }

    return <div>Loading...</div>;
}
