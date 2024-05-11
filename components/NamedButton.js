import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'


const NamedButton = ({label ,onPress}) => {
    return (
        <Pressable style={tw`items-center`}>
            <Text style={tw`text-white `}>{label}</Text>
        </Pressable>
    )
}

export default NamedButton

const styles = StyleSheet.create({})