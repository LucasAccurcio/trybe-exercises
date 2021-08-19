const { getRepos } = require('./exercicio4');

describe('Verifica se repositório existe', () => {

  it('Existe To Do List', async () => {
    const repositorio = await getRepos('https://api.github.com/orgs/tryber/repos');
    const searchProject = 'sd-01-week4-5-project-todo-list';
    const search = repositorio.find((element) => element === searchProject);
    expect(search).toEqual('sd-01-week4-5-project-todo-list');
  })

  it('Existe Meme Generator', async () => {
    const repositorio = await getRepos('https://api.github.com/orgs/tryber/repos');
    const searchProject = 'sd-01-week4-5-project-meme-generator';
    const search = repositorio.find((element) => element === searchProject);
    expect(search).toEqual('sd-01-week4-5-project-meme-generator');
  })

})