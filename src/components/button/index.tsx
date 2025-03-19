import React from "react";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native"
import { style } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = TouchableHighlightProps & {
  text: string,
  loading?: boolean
}

export function Button({...rest}: Props){
  return( 
    <TouchableOpacity 
      style={style.button}
      {...rest}
      activeOpacity={0.6}
    >
        { 
          rest.loading?
            <ActivityIndicator color={'#fff'}/>
          :
            <Text style={style.textButton}>{rest.text}</Text>
        }
    </TouchableOpacity>
  )
}