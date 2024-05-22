import { Image, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import Button from '@/src/components/button'

import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Onboarding1() {
  const handleJump = async () => {
    try {
      await AsyncStorage.setItem('firstTimeToAccess', 'true')
    } catch (error) {
      console.log(error)
    }

    router.push('/onboarding/onboarding-2/')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={{ width: '100%', height: 72, justifyContent: 'center' }}>
        <Pressable onPress={() => router.back()}>
          <Image
            source={require('@/src/assets/imagens/back-arrow.png')}
            alt="Botão de voltar"
          />
        </Pressable>
      </View>

      <View>
        <View>
          <Image
            source={require('@/src/assets/imagens/onboarding-1.png')}
            alt="Onboarding"
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
        </View>

        <Text style={[styles.title, { marginTop: 24 }]}>
          Rápido, fácil e seguro
        </Text>

        <Text style={[styles.text, { marginTop: 8 }]}>
          Dividir as contas é moleza! Basta adicionar as pessoas, escolher o
          valor e pronto! O aplicativo faz o resto.
        </Text>
      </View>

      <View style={{ paddingVertical: 48 }}>
        <Button
          type="dark"
          onPress={() => router.push('/onboarding/onboarding-2/')}
        >
          Como Funciona
        </Button>
        <Button type="link" onPress={handleJump}>
          Pular
        </Button>
      </View>
    </View>
  )
}
