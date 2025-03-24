import React, { useState } from "react";

import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from '../../assets/logo.png';
import { style } from "./styles";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { themas } from "../../global/themes";
import {useNavigation, NavigationProp } from '@react-navigation/native'


export default function Login (){

  const navigation = useNavigation<NavigationProp<any>>()

  const [email, setEmail]= useState('a')
  const [password, setPassword] = useState('a')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert('Atenção', 'Informe os campos obrigatórios');
      }
       navigation.reset({routes:[{name:"BottomRoutes"}]})

      console.log("Logou")
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  return(
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image 
          source={logo}
          resizeMode="contain"
        />
        <Text style={style.title}>Bem vindo de volta</Text>
      </View>
      <View style={style.boxMid}>
        <Input
          value={email}
          onChangeText={setEmail}
          title="Endereço de e-mail"
          IconRight={MaterialIcons}
          iconRightName="email"
        />
        <Input 
          value={password}
          onChangeText={setPassword}
          title="Senha"
          IconRight={Octicons}
          iconRightName={showPassword?"eye-closed":"eye"}
          secureTextEntry={showPassword}
          onIconRightPress={()=> setShowPassword(!showPassword)}
        />
      </View>
      <View style={style.boxBottom}>
        <Button 
          text="Entrar"
          loading={loading}
          onPress={()=> getLogin()}
        />
      </View>
      <Text style={style.textBottom}>Não tem conta? <Text style={{color:themas.colors.primary}}>Crie agora!</Text></Text>
    </View>
  )
}