import { Text, ScrollView, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
    return (
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={true}
        indicatorStyle="white"
      >
        <Text style={styles.headerText}>
          Ласкаво просимо до Little Lemon
        </Text>
        <Text style={styles.bodyText}>
          Little Lemon — це чарівне бістро, де подають прості страви та класичні коктейлі в жвавій, але невимушеній обстановці. Ми хотіли б почути більше про ваш досвід роботи з нами!
        </Text>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    scrollContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    bodyText: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      marginTop: 20,
    },
  });