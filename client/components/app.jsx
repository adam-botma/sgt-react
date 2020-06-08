import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getGrades();

  }

  getGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => this.setState({ grades: data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='container'>
        <header className='row'>
          <div className='col'>
            <Header/>
          </div>
        </header>
        <div className='container'>
          <GradeTable grades ={this.state.grades}/>
        </div>
      </div>
    );
  }
}

export default App;
