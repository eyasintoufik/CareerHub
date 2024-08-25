import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2>Ooop!! </h2>
            <Link to='/'><button >Go Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;