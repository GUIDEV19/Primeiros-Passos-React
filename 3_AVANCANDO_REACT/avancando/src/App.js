import './App.css';
import esqueleto from './assets/img2.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import Executarfuncao from './components/Executarfuncao';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1, name: "guilherme", age: 24},
    {id: 2, name: "neto", age: 34},
    {id: 3, name: "Lucas", age: 24}
  ]

  const pessoas = [
    {id: 1, name: "guilherme", age: 24},
    {id: 2, name: "neto", age: 34},
    {id: 3, name: "Alexandre", age: 24}
  ]

  function showMessage(){
    console.log("Teste render function")
  }
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* imagem em public */}
      <div>
        <img src="/img1.jpg" alt="" />
      </div>

      {/* imagem em assets */}
      <div>
        <img src={esqueleto} alt="" />
      </div>

      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
      {
        users.map((user) => (
          <ShowUserName name={user.name} age={user.age}/>
        ))
      }

      <Container myValue="teste">
        <h1>Item aqui</h1>
      </Container>

      {/* Executar Função */}
      <Executarfuncao myFunction={showMessage}/>

      {pessoas.map((pessoa) => (
        <UserDetails name={pessoa.name} age={pessoa.age} key={pessoa.id}/>
      ))}
    </div>
  );
}

export default App;
