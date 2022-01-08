import React from 'react';

class InputForm extends React.Component {
  render(){
    const { name, type, description, value, handleChange } = this.props;

    return (
      <div className="input-group mb-3">
        <label className="form-label" htmlFor={name}>
          { description }
          <input className="form-control" name={name} id={name} type={type} value={value} onChange={handleChange} />
        </label>
      </div>
    )
  }
}

export default InputForm;