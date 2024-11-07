import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, setFirstName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.descriptionText}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#EDEFEE"
        value={firstName}
        onChangeText={setFirstName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EDEFEE',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#EDEFEE',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: '#EDEFEE',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#333333',
    backgroundColor: '#EDEFEE',
    width: '80%',
    marginBottom: 20,
    fontSize: 16,
  },
});