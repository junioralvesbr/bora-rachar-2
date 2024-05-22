import { Image, Text, View } from 'react-native'

import { styles } from './styles'
import Button from '@/src/components/button'

export default function Onboarding1() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
      <View style={{ width: '100%', height: 72 }}>
        <Text>Back</Text>
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
        <Button type="dark">Como Funciona</Button>
        <Button type="link">Pular</Button>
      </View>
    </View>
  )
}
