import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import { setDarkMode } from './util/index';
import './styles/reactsax.scss';

// import Alert from './components/rsAlert/Base/rsAlert';
// import Loading from './components/rsLoading/Base/RsLoading';
import Button from './components/rsButton/Base/RsButton';
// import Input from './components/rsInput/Base/RsInput';
// import Checkbox from './components/rsCheckbox/Base/RsCheckbox';
// import Switch from './components/rsSwitch/Base/RsSwitch';
// import Avatar from './components/rsAvatar/Base/RsAvatar';
// import AvatarGroup from './components/rsAvatar/Group/RsAvatarGroup';
// import Notification from './components/rsNotification/Base/RsNotification';
// import NotificationFunc from './components/rsNotification/Base/RsNotificationFunction';
// import Radio from './components/rsRadio/Base/RsRadio';
import Tooltip from './components/rsTooltip/Base/RsTooltip';

setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleOpenLoading = this.handleOpenLoading.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      active: ''
    };
  }

  handleOpenLoading() {
    this.setState({ active: true });
    setTimeout(() => {
      this.setState({ active: false });
    }, 2000);
  }

  handleChange(e: any) {
    this.setState({ active: e.target.value });
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
            <Tooltip color='danger' border tooltip='Hello'>
              <Button flat>Codsey</Button>
            </Tooltip>
            <Tooltip loading color='danger' borderThick tooltip='Hello'>
              <Button flat>Baro</Button>
            </Tooltip>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
