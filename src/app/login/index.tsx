import { Text, TextInput, View } from 'react-native'
import Header from '@/src/components/header'
import { Link } from 'expo-router'
import Button from '@/src/components/button'
import { styles } from './styles'

export default function Login() {
  return (
    <View style={styles.container}>
      <Header>Login</Header>

      <View>
        <Text style={styles.subTitle}>Que bom que você {'\n'}voltou!</Text>
        <Text style={styles.description}>
          Faça login e comece a dividir suas contas.
        </Text>

        <View style={{ marginTop: 26, gap: 8 }}>
          <Text style={styles.label}>E-mail ou usuário</Text>
          <TextInput style={styles.input} placeholder="joão@gmail.com" />
        </View>

        <View style={{ marginTop: 26, gap: 8 }}>
          <Text style={styles.label}>Senha</Text>
          <TextInput style={styles.input} placeholder="joão@gmail.com" />
        </View>

        <Link href="/">
          <Text>Esqueceu sua senha?</Text>
        </Link>

        <View>
          <Button type="dark">Login</Button>
          <Text>Ainda não possui uma conta?</Text>
          <Link href="/create-user">Crie agora</Link>
        </View>
      </View>
    </View>
  )
}
