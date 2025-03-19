import { StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
  button: {
    height: 50,
    width:250,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    backgroundColor: themas.colors.primary,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:0.29,
    shadowRadius: 4.65,
    elevation:7
  },
  textButton:{
    fontSize: 16,
    color: themas.colors.secondary
  },
})