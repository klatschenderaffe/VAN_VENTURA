import React from 'react';
import './Fussleiste.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Impressum from '../Impressum/Impressum';


const Fussleiste = () => {
  return (

      <footer className='fussleiste'>
        <ul>
        <li>Impressum</li>
        </ul>
      </footer>
      
  );
};

export default Fussleiste
