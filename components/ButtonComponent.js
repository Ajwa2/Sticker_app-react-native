import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
// import { Icon } from 'react-native-vector-icons/FontAwesome'
import { FontAwesome } from '@expo/vector-icons';


const ButtonComponent = ({ label, theme,onPress }) => {

    if (theme === "primary") {
        return (
            <View style={[styles.ButtonContainer, {borderColor:'#ffd33d', borderRadius:10, borderWidth:2}]}>
                <Pressable style={[tw`rounded justify-center flex-row bg-white`,styles.Button]} onPress={onPress}>
                <FontAwesome name="picture-o" size={24} color="black" />
                    <Text style={tw`text-white  text-black`}>{label}</Text>
                </Pressable>
            </View>
        )
    }
    return (
        <View style={[tw`mx-2 text-center justify-center p-3 `]}>
            <Pressable style={[tw`rounded justify-center flex-row `,{width:'100%',  height:'100vh'}]}>
                <Text style={tw`text-white `}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonContainer:{
        
    },
    Button:{
        width:'100%',
        height:'100vh'
    }
})

export default ButtonComponent
