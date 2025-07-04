import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const theme = useTheme();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home' as never);
    }
  };

  const handleAdminLogin = () => {
    navigation.navigate('AdminDashboard' as never); // Update to actual admin screen
  };

  const handleSignup = () => {
    navigation.navigate('Signup' as never); // Update to actual signup screen
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.inner}
      >
        <Text variant="headlineMedium" style={styles.title}>
          Welcome!
        </Text>

        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          mode="outlined"
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          disabled={!username || !password}
        >
          Login
        </Button>

        <Button
          mode="text"
          onPress={handleAdminLogin}
          style={styles.adminButton}
        >
          Sign in as Admin
        </Button>

        <View style={styles.signupContainer}>
          <Text variant="bodySmall">Don't have an account?</Text>
          <Button mode="text" onPress={handleSignup} compact>
            Sign Up
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  inner: {
    padding: 24,
  },
  title: {
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  adminButton: {
    marginTop: 4,
    alignSelf: 'center',
  },
  signupContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
