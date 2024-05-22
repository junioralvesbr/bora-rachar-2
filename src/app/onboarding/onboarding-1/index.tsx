import { Dimensions, Image, Text, View } from 'react-native'
import { router } from 'expo-router'

import Button from '@/src/components/button'

import { styles } from '../styles'

export default function Onboarding1() {
  const windowHeight = Dimensions.get('window').height
  const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={{ paddingTop: adaptativePaddingTopScreen }}>
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
          Dividir as contas é moleza! {'\n'}Basta adicionar as pessoas, escolher
          o valor {'\n'}e pronto! O aplicativo faz o resto.
        </Text>
      </View>

      <View style={{ paddingVertical: 48 }}>
        <Button
          type="dark"
          onPress={() => router.push('/onboarding/onboarding-2/')}
        >
          Como Funciona
        </Button>

        <Button type="link" onPress={() => router.replace('/')}>
          Pular
        </Button>
      </View>
    </View>
  )
}
