import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Pressable, View, Image, useColorScheme } from 'react-native';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleLogin = () => {
    navigation.navigate('welcome');
  };
  

  return (
    <ScrollView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
        <View>
          <Text style={[styles.headerText, isDarkMode ? styles.darkText : styles.lightText]}>
            Welcome to Little Lemon
          </Text>
          <Text style={[styles.regularText, isDarkMode ? styles.darkText : styles.lightText]}>
            Login to continue
          </Text>

          <TextInput
            style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
            placeholder="Email"
            placeholderTextColor={isDarkMode ? '#EDEFEE' : '#333333'}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={[styles.input, isDarkMode ? styles.darkInput : styles.lightInput]}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? '#EDEFEE' : '#333333'}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  lightContainer: {
    backgroundColor: '#EDEFEE',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  darkInput: {
    color: '#EDEFEE',
    backgroundColor: '#333333',
    borderColor: '#EDEFEE',
  },
  lightInput: {
    color: '#333333',
    backgroundColor: '#EDEFEE',
    borderColor: '#333333',
  },
  button: {
    backgroundColor: '#EE9972',
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#EDEFEE',
  },
});