import './App.css';
import Family from './context/Family';
import {FamilyContext} from './context/familyContext'


const FamilySecret = {
  familyName: 'The Smiths',
  onlyParentCanSee: () => {
    return `The Smiths are the best!`
  },
  onlyGrandChildrenShouldKnow: () => {
    return `They are the best!`
  },
}


function App() {
  return (
    <>
    <FamilyContext.Provider value={FamilySecret} >
      <Family />
    </FamilyContext.Provider>
    </>
  );
}

export default App;
