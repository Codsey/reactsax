import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/reactsax.scss';
import Button from './components/rsButton/Base/RsButton';
import { setDarkMode } from './util/index';

setDarkMode();

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button>Reactsax</Button>
        <Button disabled>Reactsax</Button>
        <Button flat>Reactsax</Button>
        <Button border>Reactsax</Button>
        <Button transparent>Reactsax</Button>
        <Button relief>Reactsax</Button>
        <Button gradient color='warn'>
          Reactsax
        </Button>
      </header>
    </div>
  );
}

export default App;
