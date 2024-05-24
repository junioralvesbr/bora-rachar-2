import { Text, TextInput, View } from 'react-native'
import Header from '@/src/components/header'
import { Link } from 'expo-router'
import Button from '@/src/components/button'

export default function Login() {
  return (
    <View>
      <Header />

      <View>
        <Text>Que bom que você voltou!</Text>
        <Text>Faça login e comece a dividir suas contas.</Text>

        <View>
          <Text>E-mail ou usuário</Text>
          <TextInput placeholder="joão@gmail.com" />
        </View>

        <View>
          <Text>Senha</Text>
          <TextInput placeholder="joão@gmail.com" />
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
