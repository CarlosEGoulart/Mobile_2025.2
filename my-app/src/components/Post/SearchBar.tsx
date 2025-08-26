import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

interface FormProp {
    handleSearch(keywords: string):void
}

export default function SearchBar(props: FormProp) {
    const[name, setName] = React.useState("")
    
    
    const onSearch= () =>{
        props.handleSearch(name);
        setName("");
    }
  
    return (
    <View>
      <Text>SearchBar</Text>
      <TextInput 
      onChangeText={setName}
      value={name}
      placeholder="Pesquisar"/>
      <Button title="Pesquisar" onPress={onSearch}/>
    </View>
  )
}