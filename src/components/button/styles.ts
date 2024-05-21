import { theme } from '@/src/theme/'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: theme.fontFamily.semiBold,
    fontWeight: '600',
    color: theme.colors.white,
    fontSize: 16,
  },
  dark: {
    backgroundColor: theme.colors.primary,
  },
  light: {
    backgroundColor: theme.colors.secondary,
  },
  transparent: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
})
