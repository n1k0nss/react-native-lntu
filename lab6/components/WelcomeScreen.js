import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native';
import LogoImage from '../assets/logo.png';

export default function WelcomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.header}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={[styles.welcomeText, isDarkMode ? styles.darkText : styles.lightText]}>
          Welcome to Little Lemon
        </Text>
      </View>
      <Text style={[styles.descriptionText, isDarkMode ? styles.darkText : styles.lightText]}>
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear your experience with us!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  darkContainer: {
    backgroundColor: '#333333',
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkText: {
    color: '#EDEFEE',
  },
  lightText: {
    color: '#333333',
  },
});