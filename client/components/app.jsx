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

  getAverageGrade() {
    const gradesArray = this.state.grades;
    let sum = 0;
    if (!gradesArray[0]) {
      return 0;
    }
    for (let index = 0; index < gradesArray.length; index++) {
      sum += gradesArray[index].grade;
    }
    const average = sum / gradesArray.length;

    return average;
  }

  render() {
    return (
      <div className='container'>
        <Header gradeAverage ={this.getAverageGrade()}/>
        <div className='container'>
          <GradeTable grades ={this.state.grades}/>
        </div>
      </div>
    );
  }
}

export default App;
