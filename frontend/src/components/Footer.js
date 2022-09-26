import React from 'react';

export const Footer = (props) => {

    let year = new Date().getFullYear();

    return (
        <footer className='bg-dark mt-3 p-3 text-center text-white position-fixed bottom-0'>
            {year}
        </footer>
    );
}
