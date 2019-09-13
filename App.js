/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Timer from './Timer'

const App = () => {
  return (
        <View style={styles.sectionContainer}>
          <Timer />
        </View>
      );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
