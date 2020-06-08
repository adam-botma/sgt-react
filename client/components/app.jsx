import React from 'react';
import Header from './header';
import GradeTable from './GradeTable';
import GradeForm from './GradeForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.addAGrade = this.addAGrade.bind(this);
    this.deleteAGrade = this.deleteAGrade.bind(this);
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

  addAGrade(fullGrade) {
    const currentArray = this.state.grades.slice();
    const requestObject = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: fullGrade.name, grade: fullGrade.grade, course: fullGrade.course })
    };
    fetch('/api/grades', requestObject)
      .then(response => response.json())
      .then(data => {
        currentArray.push(data);
        this.setState({ grades: currentArray });
      });
  }

  deleteAGrade(gradeID) {
    const currentArray = this.state.grades.slice();
    const idIndex = currentArray.findIndex(grade => grade.id === gradeID);

    const requestData = { method: 'DELETE' };
    fetch(`/api/grades/${gradeID}`, requestData)
      .then(response => response.json())
      .then(data => {
        currentArray.splice(idIndex, 1);
        this.setState({ grades: currentArray });
      });
  }

  getAverageGrade() {
    const gradesArray = this.state.grades;
    let sum = 0;
    if (!gradesArray[0]) {
      return 0;
    }
    for (let index = 0; index < gradesArray.length; index++) {
      sum += parseInt(gradesArray[index].grade, 10);
    }
    const average = sum / gradesArray.length;

    return average.toFixed(2);
  }

  render() {
    return (
      <div className='container'>
        <Header gradeAverage ={this.getAverageGrade()}/>
        <div className='container d-flex'>
          <div className='table-container col col-9'>
            <GradeTable grades={this.state.grades} deleteAGrade={this.deleteAGrade}/>
          </div>
          <div className='col col-3'>
            <GradeForm addGrade = {this.addAGrade} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
