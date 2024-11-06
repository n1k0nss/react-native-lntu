import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#333333',
      }}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <LittleLemonFooter />
    </View>
  );
}
