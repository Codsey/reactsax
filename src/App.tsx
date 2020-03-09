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
              color='warn'
              active={this.state.active}
              closable={() => this.setState({ active: !this.state.active })}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus
              massa ac ante aliquam efficitur. Curabitur molestie bibendum
              convallis. Duis leo nisi, consectetur quis lectus non, placerat
              consequat nunc. Duis scelerisque, enim non auctor rhoncus, risus
              urna mollis quam, non ornare est libero quis velit. Mauris
              condimentum finibus massa non consectetur. Phasellus sed felis id
              sapien ullamcorper viverra nec vitae dui. Etiam non nisl accumsan,
              vulputate augue sit amet, efficitur leo. Vestibulum efficitur sem
              magna, ornare ullamcorper massa laoreet non. Mauris et libero
              maximus, rutrum tortor nec, fringilla turpis.
            </Alert>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
