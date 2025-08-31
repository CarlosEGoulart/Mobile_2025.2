import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Link href="/(Ex1)/screen1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para a Tela 1</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  button: {
    backgroundColor: '#1d1d1dff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
    buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
