import { StyleSheet } from 'react-native'
import { theme } from '../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    alignItems: 'center',
  },
  containerButton: {
    width: '100%',
    marginTop: 128,
  },
  horizontalLineWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.secondary,
  },
  horizontalText: {
    fontFamily: theme.fontFamily.regular,
    fontWeight: '400',
    color: theme.colors.primary,
    fontSize: 14,
    paddingHorizontal: 8,
  },
})
