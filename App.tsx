import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { GrowthMapScreen } from '@/screens/GrowthMapScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <GrowthMapScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
