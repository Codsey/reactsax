import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/reactsax.scss';
import Button from './components/rsButton/Base/RsButton';
import ButtonGroup from './components/rsButton/Group/RsButtonGroup';
import { setDarkMode } from './util/index';

setDarkMode();

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ButtonGroup>
          <Button>Reactsax</Button>
          <Button>Reactsax</Button>
          <Button>Reactsax</Button>
          <Button>Reactsax</Button>
        </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
