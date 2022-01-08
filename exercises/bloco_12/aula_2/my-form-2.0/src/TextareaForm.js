import React from 'react';
import './App.css';

class TextareaForm extends React.Component {
  render(){
    const { name, description, value, handleChange, maxLength } = this.props;

    return (
      <div className="input-group mb-3">
        <label className="form-label" htmlFor={name}>
          { description }
          <textarea className="form-control" name={name} id={name} value={value} onChange={handleChange} rows="6" cols="" maxLength={maxLength} />
        </label>
      </div>
    )
  }
}

export default TextareaForm;