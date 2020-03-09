import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import './styles/reactsax.scss';
// import { setDarkMode } from './util/index';

import Alert from './components/rsAlert/Base/rsAlert';
import Button from './components/rsButton/Base/RsButton';
// setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <img src={reactsax} className='reactsax-logo' alt='logo' />
          <Button
            onClick={() => this.setState({ active: !this.state.active })}
            color='warn'
          >
            {this.state.active ? 'Click to hide' : 'Click to show'}
          </Button>
          <div style={{ textAlign: 'left' }}>
            <Alert
              title='Reactsax Framework'
              footer='this is footer'
              color='warn'
              closable={() => this.setState({ active: false })}
              active={this.state.active}
              pagination={[
                'Reactsax is a UI framework created by Codsey ',
                'I love Bares',
                'Bares loves me'
              ]}
            ></Alert>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
