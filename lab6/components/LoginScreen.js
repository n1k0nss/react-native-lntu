import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#EDEFEE"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#EDEFEE"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingHorizontal: 20,
  },
  headerText: {
    paddingTop: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#EDEFEE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#333333',
    backgroundColor: '#EDEFEE',
    marginBottom: 20,
    fontSize: 16,
  },
});