
import './styles/App.css'
import {Options,PersonalDetails, ProfessionalDetails} from "./components/sidebar.jsx"
import { Resume } from './components/Resume.jsx'


function App() {

  return (
    <>
    <div id="Sidebar">
      <Options/>
      <PersonalDetails  />
    <ProfessionalDetails/> 

      
    </div>
     <Resume/>
    </>
  )
}

export default App
