import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/MaterialIcons'
import tw from 'tailwind-react-native-classnames'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const NamedButton = ({label ,onPress}) => {
    return (
        <Pressable style={tw`items-center`}>
            <Text style={tw`text-white `}>{label}</Text>
        </Pressable>
    )
}

export default NamedButton

const styles = StyleSheet.create({})