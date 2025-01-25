import './App.css'
import Button from './components/Button'

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

        <Button />
      </div>
    </>
  )
}

export default App