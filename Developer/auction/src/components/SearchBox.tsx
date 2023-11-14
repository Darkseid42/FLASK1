import { View, TextInput } from 'react-native'
import React from 'react'

type Props = {}

const SearchBox = (props: Props) => {
  return (
    <View>
      <TextInput placeholder="Enter the username" />
    </View>
  )
}

export default SearchBox