import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AloitusSivu from './Aloitus/AloitusSivu'; // Tuo AloitusSivu-komponentti

export default function App() {
  return (
    <View style={styles.container}>
      <AloitusSivu /> {/* Renderöi AloitusSivu-komponentti */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});