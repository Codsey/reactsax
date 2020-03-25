import React from 'react';
import logo from './react-logo.png';
import reactsax from './reactsax.png';
import './App.css';
import { setDarkMode } from './util/index';
import './styles/reactsax.scss';

// import Cherno from './cherno.jpg';
// import Alert from './components/rsAlert/Base/rsAlert';
// import Loading from './components/rsLoading/Base/RsLoading';
// import Button from './components/rsButton/Base/RsButton';
// import Input from './components/rsInput/Base/RsInput';+
// import Checkbox from './components/rsCheckbox/Base/RsCheckbox';
// import Switch from './components/rsSwitch/Base/RsSwitch';
// import Avatar from './components/rsAvatar/Base/RsAvatar';
// import AvatarGroup from './components/rsAvatar/Group/RsAvatarGroup';
// import Notification from './components/rsNotification/Base/RsNotification';
// import NotificationFunc from './components/rsNotification/Base/RsNotificationFunction';
// import Radio from './components/rsRadio/Base/RsRadio';
// import Tooltip from './components/rsTooltip/Base/RsTooltip';
// import Modal from './components/rsModal/Base/RsModal';
import Pagination from './components/rsPagination/Base/RsPagination';

setDarkMode();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: false
    };
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
            <Pagination progress length={20} max={9} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
