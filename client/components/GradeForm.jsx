import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Student Name',
      course: 'Course',
      grade: 'Grade'
    };
    this.addGrade = props.addGrade;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);

  }

  handleSubmit() {
    event.preventDefault();
    this.addGrade(this.state);
    this.setState({ name: 'Student Name', course: 'Course', grade: 'Grade' });
  }

  clearForm(event) {
    event.preventDefault();
    this.setState({ name: 'Student Name', course: 'Course', grade: 'Grade' });

  }

  handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className='col-sm-2 col-form-label'><i className='fas fa-user'></i></label>
          <div className='col-sm-10 input'>
            <input type="text" name="name" id="name" className = 'w-100'placeholder={this.state.name} onChange = {this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="course" className='col-sm-2 col-form-label'><i className='far fa-window-maximize'></i></label>
          <div className='col-sm-10 input'>
            <input type="text" name="course" id="course" className="w-100" placeholder={this.state.course} onChange = {this.handleChange}/>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor="grade" className='col-sm-2 col-form-label'><i className='fas fa-graduation-cap'></i></label>
          <div className='col-sm-10 input'>
            <input type="text" name="grade" id="grade" className="w-100" placeholder={this.state.grade} onChange = {this.handleChange} />
          </div>
        </div>
        <div className="form-group row align-items-end buttons">
          <button type="submit" className="btn  btn-dark ml-auto add" >Add</button>
          <button className="btn  btn-outline-dark cancel" onClick={this.clearForm}>Clear</button>
        </div>
      </form>
    );
  }

}
export default GradeForm;
