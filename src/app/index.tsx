import { Text, View } from 'react-native'
import { theme } from '../theme'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontFamily: theme.fontFamily.InterRegular }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  )
}
