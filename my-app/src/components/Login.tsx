import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
  const [username, onChangeUser] = React.useState('');
  let [password, onChangePass] = React.useState('');
  let [passConfirm, onChangeConfirm] = React.useState('');


  const handleLogin = () => {
    console.log("Usuario: " + username);
    console.log("Senha: " + password);
  }

  const handleReset = () => {
    password = '';
    passConfirm = '';
  }

  React.useEffect(()=> {
    console.log('Senha resetada')
  }, [handleReset]);

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

        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Confirme sua senha'
          onChangeText={onChangeConfirm}
          value={passConfirm}
          secureTextEntry={true}
        />

        <Button title='Reset Password' onPress={handleReset}/>
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
