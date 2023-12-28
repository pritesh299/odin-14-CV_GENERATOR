
import './styles/App.css'
import Options from "./components/options.jsx"
import Education from "./components/Education.jsx"
import Experiance from "./components/Experiance.jsx"

function App() {

  return (
    <>
    <div id="Sidebar">
      <Options/>
      <Education/>
      <Experiance/>
    </div>
    <div id="Display">
      
    </div>
    </>
  )
}

export default App
