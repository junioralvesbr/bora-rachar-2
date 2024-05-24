import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.secondary,
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.gray600,
    lineHeight: 24,
  },
})
