import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'
import { TapGestureHandler, useAnimatedGestureHandler } from 'react-native-gesture-handler'


const EmojiSticker = ({ fontSize, stickerSource }) => {
    const scaleEmoji = useSharedValue(fontSize)  // 43 ----> 88

    const onDoubleTap = useAnimatedGestureHandler({
        onActive: () => {
            if (scaleEmoji.value !== fontSize * 2) {
                scaleEmoji.value = scaleEmoji.value * 2;
            } else {
                scaleEmoji.value = fontSize;
            }
        }
    })

    const fontStyle = useAnimatedStyle(() => {
        return { fontSize: withSpring(scaleEmoji.value) }
    })
    const AnimatedText = Animated.createAnimatedComponent(Text)
    return (
        <View style={{ top: -350 }}>
            <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
                <AnimatedText style={[fontStyle, tw`font-${fontSize}`]}>
                    {stickerSource}
                </AnimatedText>
            </TapGestureHandler>
        </View>
    )
}


const styles = StyleSheet.create({})

export default EmojiSticker
