import { Text, View } from 'react-native'
import { theme } from '../theme'

import Logo from '@/src/assets/logo.svg'

export default function Index() {
  return (
    <View>
      <Text style={{ fontFamily: theme.fontFamily.InterRegular }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Logo width={196} height={80} />
    </View>
  )
}
