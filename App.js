import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import colors from './src/constants/colors';
import Main from './src/containers/Main'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{backgroundColor: colors.bgPink, flex: 1}}>
        <Main/>
      </SafeAreaView>
    </>
  );
};



export default App;
