import { View } from 'react-native'
import { Slot } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Layout() {
  useEffect(() => {
    async function setFirstTimeToAccess() {
      try {
        await AsyncStorage.setItem('firstTimeToAccess', 'true')
      } catch (error) {
        console.log(error)
      }
    }

    setFirstTimeToAccess()
  }, [])

  return (
    <View style={{ flex: 1, marginHorizontal: 24 }}>
      <Slot />
    </View>
  )
}
