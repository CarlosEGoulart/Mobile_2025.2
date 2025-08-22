import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login'
import Post from "./src/components/Post/index"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Carlosgram</Text>
      <Login />
      <Text>----Posts----</Text>
      <Post author='Julia' 
        content='Photo' 
        title='Foto na faculdade' 
        likes={178} 
      />
      <Post author='Carlos' 
        content='Photo' 
        title='Foto na academia' 
        likes={1} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
});
