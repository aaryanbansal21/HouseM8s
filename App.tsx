import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens here
// import AccountScreen from './src/screens/AccountScreen';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ReportIncidentScreen from './src/screens/ReportIncidentScreen';
import ReportHistoryScreen from './src/screens/ReportHistoryScreen';
import CommunityScreen from './src/screens/CommunityScreen';
// import TimelineScreen from './src/screens/TimelineScreen';

const Stack = createStackNavigator();

function MainMenu({ navigation }) {
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      {/* <Button title="Account" onPress={() => navigation.navigate('AccountScreen')} /> */}
      {/* <Button title="Chat" onPress={() => navigation.navigate('ChatScreen')} /> */}
      {/* <Button title="Timeline" onPress={() => navigation.navigate('TimelineScreen')} /> */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MainMenu} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Uncomment these lines when the screens are implemented */}
        <Stack.Screen name="ReportIncident" component={ReportIncidentScreen} />
        <Stack.Screen name="ReportHistory" component={ReportHistoryScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />        
        {/* <Stack.Screen name="AccountScreen" component={AccountScreen} /> */}
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* <Stack.Screen name="TimelineScreen" component={TimelineScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});