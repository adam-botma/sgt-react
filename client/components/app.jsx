import React from 'react';
import Header from './header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  render() {
    return (
      <div className='container'>
        <header className='row'>
          <div className='col col-9'>
            <Header/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
