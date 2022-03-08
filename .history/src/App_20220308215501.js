import React from "react";
import ReactDOM from "react-dom";
import Confirmation from "./components/Confirmation";
import WaveSurfer from "./components/WaveSurfer";

/* Changes made to this file will not affect your tests.
 * This file is used to control the behavior of the web preview. 
*/
const App = props => (
  <div id="app">
    <Confirmation 
      message='Is the pie a lie?'
      type='message'
      accept={() => 
        console.log("accepted") // prints to browser console
      } 
      decline={() => console.log("declined")} 
    />
    <WaveSurfer />
  </div>
);

export default App;
