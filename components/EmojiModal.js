import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/FontAwesome'
import tw from 'tailwind-react-native-classnames'
import { AntDesign } from '@expo/vector-icons';
import EmojiList from './EmojiList';


const EmojiModal = ({ isVisible, onClose }) => {
    return (
        <Modal
            animationType='slider'
            visible={isVisible}
            transparent={true}
            style={tw``}>
            <View style={[tw` rounded `,styles.ModalContent]}>
                <View style={[tw`px-5 flex-row items-center `,styles.titleContainer]}>
                    <Text style={tw`text-white`}>choose an Emoji</Text>
                    <Pressable onPress={onClose}>
                        <AntDesign name="close" size={20} color="white" />
                    </Pressable>
                </View>
                <EmojiList/>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    titleContainer:{
        backgroundColor:'#464c55',
        height:'20%',
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        justifyContent:'space-between',
    },
    ModalContent:{
        backgroundColor:'#25292e',
        height:'30%',
        width:'100%',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        position:'absolute',
        bottom:0,
    },
    PickerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:50,
        paddingVertical:20
    }
})

export default EmojiModal

