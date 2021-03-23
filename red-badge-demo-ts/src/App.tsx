import React from "react";
import PropsExample from './components/PropsExample'
import PropsMappingExample from './components/PropsMappingExample'

function App() {
  const visitedPlaces = ["Santa Fe", "Florida", "Michigan", "Brown County", "Bloomington"]

  return (
    <div>
    <PropsExample name="Tom" business="MySpace" />
    
    <PropsMappingExample visited={visitedPlaces} />
  </div>)
}

export default App;
