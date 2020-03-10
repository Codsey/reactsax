import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import './styles/reactsax.scss';
import { setDarkMode } from './util/index';

// import Alert from './components/rsAlert/Base/rsAlert';
import Loading from './components/rsLoading/Base/RsLoading';
import Button from './components/rsButton/Base/RsButton';
setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleOpenLoading = this.handleOpenLoading.bind(this);
    this.state = {
      active: false
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
          <img src={logo} className='App-logo' alt='logo' />
          <img src={reactsax} className='reactsax-logo' alt='logo' />
          <Button id='btn' onClick={this.handleOpenLoading} color='warn'>
            <Loading
              isVisible={this.state.active}
              target
              scale='0.6'
              background='warn'
              color='#fff'
              opacity='1'
            />
            {this.state.active ? 'Click to hide' : 'Click to show'}
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
