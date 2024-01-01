
import './styles/App.css'
import {Options,Education,Experience,PersonalDetails} from "./components/sidebar.jsx"
import { Resume } from './components/Resume.jsx'


function App() {

  return (
    <>
    <div id="Sidebar">
      <Options/>
      <PersonalDetails />
      <Education/>  
      <Experience/>    

      
    </div>
     <Resume/>
    </>
  )
}

export default App
