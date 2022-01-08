import React from 'react';
import InputForm from "./InputForm"
import TextareaForm from './TextareaForm';
import SubmitForm from './SubmitForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  type: '',
  resume: '',
  role: '',
  roleDescription: '',
  submitted: false,
/*   formError: {}, */
}


class FormPersonalData extends React.Component {

  constructor() {
    super();
    this.state = INITIAL_STATE;
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
    this.setState({ submitted: true });
  }

  resetForm = () => { this.setState(INITIAL_STATE) };

  /* sendForm = () => { this.setState({ submitted: true }) }; */

  render() {
    const { name, email, cpf, address, city, state, resume, role, roleDescription, submitted } = this.state;
    return (
      <>
      <form 
        style={ { display: 'flex', justifyContent: 'space-evenly' } } 
        onSubmit={this.handleSubmit}>
        <div>
          <InputForm description="Nome: " type="text" name="name" value={name} handleChange={this.handleChange} />
          <InputForm description="Email: " type="email" name="email" value={email} handleChange={this.handleChange} />
          <InputForm description="CPF: " type="text" name="cpf" value={cpf} handleChange={this.handleChange} />
          <InputForm description="Endereço: " type="text" name="address" value={address} handleChange={this.handleChange} />
          <InputForm description="Cidade: " type="text" name="city" value={city} handleChange={this.handleChange} />
          <InputForm description="Estado: " type="text" name="state" value={state} handleChange={this.handleChange} />
          <span className="form-label">Tipo de residência: </span>
          <label style={{margin:'4px'}} className="form-check-label" htmlFor="home">
            <input className="form-check-input" value="Casa" type="radio" name="type" id="home" onChange={this.handleChange} /> Casa
          </label>
          <label style={{margin:'4px'}} className="form-check-label" htmlFor="ap">
            <input className="form-check-input" value="Apartamento" type="radio" name="type" id="ap" onChange={this.handleChange} /> Apartamento
          </label>
        </div>
        <div>
          <TextareaForm description="Resumo do Currículo: " name="resume" value={resume} handleChange={this.handleChange} maxLength="1000" />
          <InputForm description="Última Cargo: " type="text" name="role" value={role} handleChange={this.handleChange} />
          <TextareaForm description="Descrição do cargo: " name="roleDescription" value={roleDescription} handleChange={this.handleChange} maxLength="500" />
          <button style={{width:'215px', marginRight:'5px'}} onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submeter Formulário</button>
          <button style={{width:'215px'}} value={this.state} onClick={this.resetForm} type="reset" className="btn btn-primary">Limpar Formulário</button>
        </div>
      </form>
      <SubmitForm display={submitted} />
    </>
    );
  }
}

export default FormPersonalData;
