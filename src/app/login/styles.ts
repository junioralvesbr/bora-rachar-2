import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingTop: 12,
  },
  subTitle: {
    fontFamily: theme.fontFamily.bold,
    fontSize: 30,
    fontWeight: '700',
    color: theme.colors.gray600,
    lineHeight: 38,
    marginTop: 24,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    color: theme.colors.gray600,
    lineHeight: 24,
  },
  label: {
    fontFamily: theme.fontFamily.medium,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.gray600,
  },
  input: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.black,
    borderWidth: 1,
    borderColor: theme.colors.gray300,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  link: {
    fontFamily: theme.fontFamily.bold,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    color: theme.colors.gray600,
  },
})
