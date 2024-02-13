import './App.css';
import React, {Fragment} from 'react';
import FactShow from './components/FactShow/FactShow';
import FactList from './components/FactList/FactList';
import ProfilePhotoUpload from './components/ProfilePhotoUpload/ProfilePhotoUpload';

function App() {
  return (
    <div className="App">
      <Fragment>
        <FactShow />
        <FactList />
        <ProfilePhotoUpload />
    </Fragment>
    </div>
  );
}

export default App;
