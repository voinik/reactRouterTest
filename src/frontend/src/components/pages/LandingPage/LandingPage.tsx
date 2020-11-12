import React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
    return (
        <>
            <h1>LandingPage</h1>
            <Link to="/register">To register page!</Link>
        </>
    );
}