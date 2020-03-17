import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import { setDarkMode } from './util/index';
import './styles/reactsax.scss';

import Cookie from './cookie.svg';
// import Alert from './components/rsAlert/Base/rsAlert';
// import Loading from './components/rsLoading/Base/RsLoading';
import Button from './components/rsButton/Base/RsButton';
import Input from './components/rsInput/Base/RsInput';
// import Checkbox from './components/rsCheckbox/Base/RsCheckbox';
// import Switch from './components/rsSwitch/Base/RsSwitch';
// import Avatar from './components/rsAvatar/Base/RsAvatar';
// import AvatarGroup from './components/rsAvatar/Group/RsAvatarGroup';
// import Notification from './components/rsNotification/Base/RsNotification';
import NotificationFunc from './components/rsNotification/Base/RsNotificationFunction';
setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleOpenLoading = this.handleOpenLoading.bind(this);
    this.state = {
      active: false,
      active2: false,
      position: ''
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
            <Input
              color='primary'
              labelPlaceholder='Notification Position'
              icon={<i className='bx bxs-diamond'></i>}
              onChange={(e: any) => this.setState({ position: e.target.value })}
            />
          </div>
          <div className='center'>
            <Button
              onClick={() =>
                NotificationFunc({
                  content: (
                    <div className='component'>
                      <img
                        src={Cookie}
                        alt={'cookie-img'}
                        className='cookie-logo'
                      />
                      <h3>COOKIE !</h3>
                      <p>
                        We use cookies to make your experience on this website
                        better.
                      </p>
                      <Button block color='dark'>
                        I LOVE COOKIES
                      </Button>
                    </div>
                  )
                })
              }
            >
              {' '}
              Click to notify
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
