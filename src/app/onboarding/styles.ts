import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.gray600,
    lineHeight: 34,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    color: theme.colors.gray600,
    lineHeight: 24,
  },
})
