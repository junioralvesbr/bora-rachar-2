import { Image, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'

import { styles } from './styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Pressable onPress={() => router.back()}>
          <Image
            source={require('@/src/assets/imagens/back-arrow.png')}
            alt="Botão de voltar"
          />
        </Pressable>
      </View>

      <Text style={styles.title}>Login</Text>

      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Pressable onPress={() => router.back()}>
          <Image
            source={require('@/src/assets/imagens/close.png')}
            alt="Botão de voltar"
          />
        </Pressable>
      </View>
    </View>
  )
}
