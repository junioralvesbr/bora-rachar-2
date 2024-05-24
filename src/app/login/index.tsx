import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import Header from '@/src/components/header'
import { Link } from 'expo-router'
import Button from '@/src/components/button'
import { styles } from './styles'

export default function Login() {
  return (
    <View style={{ flex: 1, marginHorizontal: 24, paddingTop: 12 }}>
      <Header>Login</Header>

      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'space-between' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
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

          <Link
            href="/"
            style={[
              styles.link,
              { textDecorationLine: 'underline', marginTop: 8 },
            ]}
          >
            Esqueceu sua senha?
          </Link>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Button type="dark">Login</Button>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
              gap: 2,
            }}
          >
            <Text style={styles.description}>Ainda não possui uma conta?</Text>
            <Link href="/create-user" style={styles.link}>
              Crie agora
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
