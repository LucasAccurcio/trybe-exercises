import React from 'react';
import InputForm from "./InputForm"
import TextareaForm from './TextareaForm';

class FormProfessionalData extends React.Component {

  constructor() {
    super();
    this.state = {
      resume: '',
      role: '',
      roleDescription: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { resume, role, roleDescription } = this.state;
    return (
      <form 
        style={ {display:'flex', justifyContent: 'center', padding: '0px 30px', border:'1px solid gray', margin: '5px' } } 
        onSubmit={this.handleSubmit}>
        <div >
          <TextareaForm description="Resumo do Currículo: " name="resume" value={resume} handleChange={this.handleChange} />
          <TextareaForm description="Última Cargo: " name="role" value={role} handleChange={this.handleChange} />
          <InputForm description="Descrição do cargo: " type="text" name="roleDescription" value={roleDescription} handleChange={this.handleChange} />
        </div>
      </form>
    );
  }
}

export default FormProfessionalData;
