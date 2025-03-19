import React, { forwardRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

import { themas } from "../../global/themes";
import { style } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
  IconLeft?: IconComponent,
  IconRight?: IconComponent,
  iconLeftName?: string,
  iconRightName?: string,
  title?: string,
  onIconLeftPress?: () => void,
  onIconRightPress?: () => void,
}

export const Input = forwardRef((props: Props)=> {

  const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress,...rest} = props

  const calculateSizeWidth = () => {
    if(IconLeft && IconRight){
      return '80%'
    }else if (IconLeft || IconRight){
      return '90%'
    }else {
      return '100%'
    }
  }

  const calculateSizePaddingLeft = () => {
    if(IconLeft && IconRight){
      return 5
    } else if (IconLeft || IconRight){
      return 10
    }else{
      return 20
    }
  }

  return(
    <>
      <Text style={style.titleInput}>{title}</Text>
      <View style={[style.boxInput, {paddingLeft: calculateSizePaddingLeft()}]}>
        {IconLeft && iconLeftName && (
          <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
            <IconLeft name={iconLeftName as any} size={20} color={themas.colors.gray} style={{width: '100%'}} />
          </TouchableOpacity>
        )}
        <TextInput
          style={[
            style.input, {width:calculateSizeWidth()}
          ]}
          {...rest}
        />
        {IconRight && iconRightName && (
            <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                <IconRight name={iconRightName as any} size={20} color={themas.colors.gray} style={{width: '100%'}} />
            </TouchableOpacity>
        )}
      </View>
    </>
   
  )
})