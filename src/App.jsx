import './App.css'
import HealthBar from './components/HealthBar/HealthBar'
import ChoicePrompts from './components/ChoicePrompts/ChoicePrompts'
import Dialog from './components/Dialog/Dialog'
import Cat from './components/Cat/Cat'

function App() {

  return (
    <>
      <ChoicePrompts />
      <Cat catState="hungry" />
      <Dialog />
    </>
  )
}

export default App
