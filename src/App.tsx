import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import { setDarkMode } from './util/index';
import './styles/reactsax.scss';

// import Alert from './components/rsAlert/Base/rsAlert';
// import Loading from './components/rsLoading/Base/RsLoading';
// import Button from './components/rsButton/Base/RsButton';
// import Input from './components/rsInput/Base/RsInput';
// import Checkbox from './components/rsCheckbox/Base/RsCheckbox';
import Switch from './components/rsSwitch/Base/RsSwitch';
setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleOpenLoading = this.handleOpenLoading.bind(this);
    this.state = {
      active: true,
      input: ''
    };
  }

  handleOpenLoading() {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ active: false });
    }, 2000);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <div style={{ paddingTop: '40px' }}>
            <img src={logo} className='App-logo' alt='logo' />
            <img src={reactsax} className='reactsax-logo' alt='logo' />
          </div>
          <div className='center'>
            <Switch color='success' square />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
