import { Image, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Image source={require("@/src/assets/imagens/logo.png")} alt="Logo Bora rachar" style={{ width: 200, height: 80 }} />
    </View>
  )
}