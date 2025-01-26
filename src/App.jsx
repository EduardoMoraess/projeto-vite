import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const name = 'eduardo'
  const newname = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-150x150-png.png?fit=696%2C749&ssl=1'

  return (
    <>
      <div className="App">
        <h2>Alterando o JSX</h2>
        <p>Olá, {newname}</p>
        <p>Soma: {sum(3, 2)}</p>

        <img src={url} alt="minha imagem" />
        
        <HelloWorld/>
      </div>
    </>
  )
}

export default App