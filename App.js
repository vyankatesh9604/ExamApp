import React, { createContext, useReducer, useEffect } from 'react';
// import { View } from 'react-native';
//  import MainNavigation from './src/Navigation/MainNavigation'
import StackNavigation from './src/Navigation/StackNavigation/StackNavigation'
// import Profile from './src/Screens/ProfileScreen'
import { reducer, initialState } from './src/reducer/UserReducer'


export const userContext = createContext()

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <userContext.Provider value={{ state, dispatch }}>
      <StackNavigation />
    </userContext.Provider>
  );
}
export default App;


