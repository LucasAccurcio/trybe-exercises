const cadastro = (nome) => {
  const email = nome.toLowerCase().split(' ').join('_');
  //return `${nome}, email: ${email}@trybe.com`;
  return { nome, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Lucas Accurcio'),
    id2: callback('Pedro Henrique'),
    id3: callback('João Paulo')
  }
  return employees;
}
console.log(newEmployees(cadastro));

