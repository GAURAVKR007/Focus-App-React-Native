import { StyleSheet, Text, StatusBar, View,SafeAreaView ,Platform , Button, Alert } from 'react-native';
import React from 'react';
import { colors } from './src/utils/colors';
import Focus from './src/features/Focus';

export default function App() {
  return (
    <>
    {/* <StatusBar barStyle="light-content" backgroundColor="orange" /> */}
      <SafeAreaView style={styles.container}>
        <Focus />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  }
});
