import { Image, Pressable, Text, View } from 'react-native'

import { styles } from './styles'
import Button from '@/src/components/button'
import { router } from 'expo-router'

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
            source={require('@/src/assets/imagens/onboarding-3.png')}
            alt="Onboarding"
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
        </View>

        <Text style={[styles.title, { marginTop: 24 }]}>
          Crie grupos, adicione amigos e escolha o jeito que prefere dividir
        </Text>

        <Text style={[styles.text, { marginTop: 8 }]}>
          Criando uma conta, você terá acesso a mais funcionalidades como
          grupos, histórico e novas modalidades de divisão.
        </Text>
      </View>

      <View style={{ paddingVertical: 48 }}>
        <Button type="dark" onPress={() => router.push('/')}>
          Criar minha conta
        </Button>
        <Button type="link">Usar a calculadora</Button>
      </View>
    </View>
  )
}
