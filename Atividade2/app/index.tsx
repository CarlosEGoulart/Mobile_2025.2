import { Link } from 'expo-router';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <Link href="/(Ex1)/ex1Screen1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para o Exercicio 1</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(Ex2)/ex2Screen1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para o Exercicio 2</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/(Ex3)/ex3Screen1" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ir para o Exercicio 3</Text>
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
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#383838',
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
