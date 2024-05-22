import { Image, Pressable, Text, View } from 'react-native'
import { router } from 'expo-router'
import Button from '@/src/components/button'

import { styles } from '../styles'

export default function Onboarding1() {
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
            source={require('@/src/assets/imagens/onboarding-2.png')}
            alt="Onboarding"
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
        </View>

        <Text style={[styles.title, { marginTop: 24 }]}>
          Calcule quanto cada um {'\n'}deverá pagar
        </Text>

        <Text style={[styles.text, { marginTop: 8 }]}>
          Use a nossa calculadora de divisões para despesas rápidas como uma
          conta de restaurante.
        </Text>
      </View>

      <View style={{ paddingVertical: 48 }}>
        <Button
          type="dark"
          onPress={() => router.push('/onboarding/onboarding-3/')}
        >
          E para gastos mais complexos?
        </Button>
        <Button type="link" onPress={() => router.replace('/')}>
          Pular
        </Button>
      </View>
    </View>
  )
}
