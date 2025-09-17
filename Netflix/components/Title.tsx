import { View, Text, TextStyle, ColorValue, StyleProp } from 'react-native'
import React from 'react'

type TitleProps = {
    children: React.ReactNode;
    color?: ColorValue;
}

export default function Title({ children }: TitleProps) {
  const style: StyleProp<TextStyle> = {
    color: "white",
  };
   
  
    return (
    <View>
      <Text style={style}>{children}</Text>
    </View>
  )
}