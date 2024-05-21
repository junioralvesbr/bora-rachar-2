import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Criar minha conta</Text>
    </TouchableOpacity>
  )
}
