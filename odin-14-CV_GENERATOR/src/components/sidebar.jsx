// components/Education.jsx
import {Preform/* ,ExperienceForm,EducationForm */} from "./Froms.jsx";
import Button from './Button';


function Education() {
  return (
    <div>
      <h2>Education</h2>
      <Preform title="first" />
      <Button text="add Education" backgroundColor="white" />


    </div>
  );
}


// components/Experience.jsx

function Experience() {
  return (
    <div id="experience">
      <h2>Experiences</h2>
      <Preform title={'lol'} />
      <Button text="add Experience" backgroundColor="white" />

    </div>
  );
}


// components/Options.jsx

function Options() {
  return (
    <>
      <div id="optionCard">
        <Button text="Clear" backgroundColor="red" />
        <Button text="Load Example" backgroundColor="white" />
      </div>
    </>
  );
}


// components/PersonalDetails.jsx
function PersonalDetails({ name, email, phoneNumber, address }) {
  return (
    <div id="PersonalDetailsCard">
      <h2>Personal Details</h2>
      <form>
      <label htmlFor="fullName">Full Name: <input id="fullName" type="text" value={name || ""} /></label>
      <label htmlFor="email">Email: <input id="email" type="text" value={email || ""} /></label>
      <label htmlFor="phoneNumber">Phone number: <input id="phoneNumber" type="text" value={phoneNumber || ""} /></label>
      <label htmlFor="address">Address: <input id="address" type="text" value={address || ""} /></label>
      </form>
    </div>
  );
}


export {
  PersonalDetails,
  Options,
  Experience,
  Education
}
