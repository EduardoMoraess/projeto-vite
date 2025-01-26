import './App.css'
import HelloWorld from './components/HelloWorld'

function App() {
  const name = 'eduardo'
  const newname = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  return (
    <>
      <div className="App">
        <h2>Alterando o JSX</h2>
        <p>Olá, {newname}</p>
        <p>Soma: {sum(3, 2)}</p>
        
        <HelloWorld/>
      </div>
    </>
  )
}

export default App