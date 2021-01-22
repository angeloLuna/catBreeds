import React from 'react';
import {SafeAreaView} from 'react-native';
import colors from './src/constants/colors';
import Main from './src/containers/Main'


const App = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: colors.bgPink, flex: 1}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
