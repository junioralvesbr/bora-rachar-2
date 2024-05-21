import { Dimensions, Image, Text, View } from 'react-native'
import Button from '@/src/components/button'
import { styles } from './styles'

export default function App() {
  const windowHeight = Dimensions.get('window').height
  const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

  return (
    <View
      style={[styles.container, { paddingTop: adaptativePaddingTopScreen }]}
    >
      <Image
        source={require('@/src/assets/imagens/logo.png')}
        alt="Logo Bora rachar"
        style={{ width: 200, height: 80 }}
      />

      <View style={styles.containerButton}>
        <Button type="dark">Criar minha conta</Button>

        <View style={styles.horizontalLineWithTextContainer}>
          <View style={styles.horizontalLine}></View>
          <Text style={styles.horizontalText}>OU</Text>
          <View style={styles.horizontalLine}></View>
        </View>

        <View style={{ gap: 16 }}>
          <Button type="light">Fazer Login</Button>
          <Button type="transparent">Usar Calculadora</Button>
        </View>
      </View>
    </View>
  )
}
