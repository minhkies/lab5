/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import AppStart from "./comps/Start";
import Contact from "./comps/Contact";
import About from "./comps/about";

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1, justifyContent: "space-around", alignItems: "center"}}>
      <AppStart/>
      <Contact/>
      <About/>
    </View>
)};

export default App;
