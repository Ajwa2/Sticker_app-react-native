import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import tw from 'tailwind-react-native-classnames'


const CircleButton = ({onPress}) => {
    return (
        <View style={[tw`items-center p-4`,{borderColor:'#ffd33d',borderWidth:2,width:64, height:64,borderRadius:42}]}>
            <Pressable style={[tw`bg-white items-center justify-center flex-1`,{borderRadius:42}]} onPress={onPress}>
                <FontAwesome6 name="add" size={28} color="black" />
            </Pressable>
        </View>
    )
}

export default CircleButton

const styles = StyleSheet.create({})