import React, { useState } from "react";

import { ActivityIndicator, Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { style } from "./styles";
import logo from '../../assets/logo.png'
import { MaterialIcons, Octicons } from '@expo/vector-icons';

import { themas } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";


export default function Login (){
  const [email, setEmail]= useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert('Atenção', 'Informe os campos obrigatórios');
      }

      setTimeout(() => {
        if(email == 'iagonovaes19@gmail.com' && password == '123456'){
          Alert.alert('Logado com sucesso!');
        }else {
          Alert.alert('usuário não cadastrado!');
        }
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
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