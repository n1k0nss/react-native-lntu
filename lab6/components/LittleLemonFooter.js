import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{backgroundColor: '#EE9972', justifyContent: 'center', alignItems: 'center',}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 14,
          color: '#000',
          fontStyle: 'italic',
        }}>
        Усі права захищені Little Lemon, 2024
      </Text>
    </View>
  );
}
