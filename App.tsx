import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
// If you don’t have an index.ts, you can register here:
registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
