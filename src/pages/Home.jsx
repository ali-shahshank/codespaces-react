import React from 'react'
import { useState, useRef, useNavigate } from 'react';

const Home = () => {

    const navigate = useNavigate;
    const [name, setName] = useState('');
    const inputRef = useRef();
    
    return (
    <>
    <h1>home</h1>
    </>
    )
}

export default Home;