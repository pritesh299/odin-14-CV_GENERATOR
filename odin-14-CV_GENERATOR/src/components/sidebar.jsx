// components/Education.jsx
import { Preform/* ,ExperienceForm,EducationForm */ } from "./Froms.jsx";
import { useState } from 'react';

function ProfessionalDetails() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div id="Education">
        <h2>Education</h2>
        <button
          style={{ backgroundColor: 'white' }}
          onClick={() => {
            if (activeIndex === 0 || activeIndex === 2) {
              setActiveIndex(1);
            } else if (activeIndex === 1) {
              setActiveIndex(0);
            }
          }}
        >
          {activeIndex === 1 ? 'Hide details' : 'Show details'}
        </button>
        {activeIndex === 1 && (
          <>
            <Preform title="first" />
            <button style={{ backgroundColor: 'white' }}>Add Education</button>
          </>
        )}
      </div>
      <div id="experience">
        <h2>Experiences</h2>
        <button
          style={{ backgroundColor: 'white' }}
          onClick={() => {
            if (activeIndex === 0 || activeIndex === 1) {
              setActiveIndex(2);
            } else if (activeIndex === 2) {
              setActiveIndex(0);
            }
          }}
        >
          {activeIndex === 2 ? 'Hide details' : 'Show details'}
        </button>
        {activeIndex === 2 && (
          <>
            <Preform title={'lol'} />
            <button style={{ backgroundColor: 'white' }}>
              Add Experience
            </button>
          </>
        )}
      </div>
    </>
  );
}

// components/Options.jsx
function Options() {
  return (
    <>
      <div id="optionCard">
        <button style={{ backgroundColor: 'red' }}>Clear</button>
        <button style={{ backgroundColor: 'white' }}>Load Example</button>
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
  ProfessionalDetails
};
