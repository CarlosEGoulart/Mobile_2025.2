import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React from 'react'

export default function Login() {
  const [username, onChangeUser] = React.useState('');
  const [password, onChangePass] = React.useState('');

  const handleLogin = () => {
    console.log("Usuario: " + username);
    console.log("Senha: " + password);
  }

  return (
    <View>
        <Text>User</Text>
        <TextInput
            style={styles.input}
            placeholder='Seu Login'
            onChangeText={onChangeUser}
            value={username}
        />

        <Text>Password</Text>
        <TextInput
            style={styles.input}
            placeholder='Sua Senha'
            onChangeText={onChangePass}
            value={password}
            secureTextEntry={true}
        />
        <Button title='Login' onPress={handleLogin}/>
    </View>
  )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
