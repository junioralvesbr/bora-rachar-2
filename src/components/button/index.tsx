import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { theme } from '@/src/theme'

type ButtonType = {
  type: 'dark' | 'light' | 'transparent'
  children: string
}

export default function Button({ type = 'dark', children }: ButtonType) {
  return (
    <TouchableOpacity style={[styles.container, styles[type]]}>
      <Text
        style={[
          styles.text,
          type === 'dark'
            ? { color: theme.colors.white }
            : { color: theme.colors.third },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
