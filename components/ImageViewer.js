import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const ImageViewer = ({imageSource,selectedImage}) => {

    const BgImageSource = selectedImage !== null ? {uri: selectedImage} : imageSource
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Image
            source={BgImageSource}
            style={styles.ImageContainer}
            // {tw.style(tw`h-4/5 rounded`,{aspectRatio:1})
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageContainer:{
        height:320,
        width:278,
        borderRadius:10
    }
})

export default ImageViewer

