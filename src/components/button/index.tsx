import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { theme } from '@/src/theme'

type ButtonType = {
  type?: 'dark' | 'light' | 'transparent' | 'link'
  onPress?: () => void
  children: string
}

export default function Button({
  type = 'dark',
  onPress,
  children,
}: ButtonType) {
  return (
    <TouchableOpacity
      style={[styles.container, styles[type]]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          type === 'dark' && { color: theme.colors.white },
          type === 'link' && { textDecorationLine: 'underline' },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
