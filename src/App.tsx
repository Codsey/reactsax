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
// import Switch from './components/rsSwitch/Base/RsSwitch';
import Avatar from './components/rsAvatar/Base/RsAvatar';
import AvatarGroup from './components/rsAvatar/Group/RsAvatarGroup';
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
            <AvatarGroup max='3'>
              <Avatar>
                <img
                  src='https://api.adorable.io/avatars/109/abott@adorable.png'
                  alt='avatar'
                />
              </Avatar>
              <Avatar>
                {' '}
                <img
                  src='https://api.adorable.io/avatars/285/can@adorable.io.png'
                  alt='avatar'
                />
              </Avatar>
              <Avatar>
                {' '}
                <img
                  src='https://api.adorable.io/avatars/285/ash@adorable.io.png'
                  alt='avatar'
                />
              </Avatar>
              <Avatar color='danger' text='A' />
              <Avatar color='danger' text='A' />
              <Avatar color='danger' text='A' />
            </AvatarGroup>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
