import React from 'react';

function Header(props) {
  return (
    <header className='row'>
      <div className='col col-9'>
        <h1>Student Grade Table</h1>
      </div>
      <div className= 'col col-3 d-flex justify-content-end align-items-end'>
        <h4>Average Grade: <span className='badge badge-secondary'>{props.gradeAverage}</span></h4>
      </div>
    </header>
  );
}

export default Header;
