import { StyleSheet,  View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import tw from 'tailwind-react-native-classnames';
import ButtonComponent from './components/ButtonComponent';
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react';
import CircleButton from './components/CircleButton';
import NamedButton from './components/NamedButton';
import EmojiModal from './components/EmojiModal';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import EmojiList from './components/EmojiList';
// import EmojiSticker from './components/EmojiSticker';



export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [showAddOption, setShowAddOption] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedEmoji, setSelectedEmoji] = useState(null)


  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1 //least compression and high quality
    })
    if (!result.canceled) {
      //set image
      console.log(result)
      setSelectedImage(result.assets[0].uri)
      setShowAddOption(true)
    } else {
      console.log("cancled")
    }
  }
  console.log("selectedEmoji",selectedEmoji)
  return (
    <View style={styles.container}>
      <View style={tw`flex-1 pt-5 `}>
        <ImageViewer imageSource={require('./assets/photo.jpg')} 
        selectedImage={selectedImage} />
        {selectedEmoji !== null ? (
          <EmojiSticker fontSize={30} stickerSource={selectedEmoji}/>
        ): null}
      </View>

      <EmojiModal isVisible={isModalVisible} onClose={() => setIsModalVisible(false)}>
        <EmojiList
        selectedEmoji={selectedEmoji}
        // setSelectedEmoji={setSelectedEmoji}
        onClose = {()=> setIsModalVisible(false)}
        onSelect = {(emoji)=>{
          setSelectedEmoji(emoji)
          setIsModalVisible(false)}}
        />
      </EmojiModal>
      {
        showAddOption ? (
          <View style={[tw`mb-10 flex-row items-center`,{gap:20}]}>
            <View style={{ flexDirection: 'column',justifyContent:'center' , alignItems:'center' }}>
              <FontAwesome name="refresh" size={24} color="white" />
              <NamedButton label='Reset' />
            </View>
            <CircleButton onPress={() => setIsModalVisible(true)} />
            <View style={{ flexDirection: 'column' ,justifyContent:'center' , alignItems:'center' }}>
              <MaterialIcons name="save-alt" size={24} color="white" />
              <NamedButton label='Save' icon='save-alt' />
            </View>
          </View>) : (
          <View style={styles.ButtonContainer}>
            <ButtonComponent label="upload a Photo" theme="primary" onPress={pickImageFromGallery} />
            <ButtonComponent label="choose this photo" />
          </View>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer: {
    flex: 1 / 3,
    // alignItems:'center',
  }
});
