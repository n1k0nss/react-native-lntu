import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: '#EE9972' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: '#000',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}
