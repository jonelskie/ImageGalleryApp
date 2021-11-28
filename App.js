import React, { useEffect, useState } from 'react';
import { StyleSheet, StatusBar, View, SafeAreaView, Image, TouchableOpacity, Modal } from 'react-native';

const ModalPopUp = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);

  useEffect(() => {
    toggleModal()
  }, [visible]);

  const toggleModal = () => {
    if (visible) setShowModal(true);
    else setShowModal(false);
  }
  
  return ( 
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal> 
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState(require('./assets/image1.jpg'));

  return (
    <SafeAreaView style={styles.container}>

    <ModalPopUp visible={visible}>
      <TouchableOpacity styles={{alignItems: 'center'}} onPress={() => {setVisible(false)}}>
        <Image style={styles.img} source={image}/>
      </TouchableOpacity>
    </ModalPopUp>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner}
          onPress={() => {setVisible(true); setImage(require('./assets/image1.jpg'))}}>
          <Image 
            style={styles.img}
            source={require('./assets/image1.jpg')} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner}
          onPress={() => {setVisible(true); setImage(require('./assets/image2.webp'))}}>
          <Image 
              style={styles.img}
              source={require('./assets/image2.webp')} 
            />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner}
          onPress={() => {setVisible(true); setImage(require('./assets/image3.jpg'))}}>
          <Image 
              style={styles.img}
              source={require('./assets/image3.jpg')} 
            />
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity style={styles.inner}
          onPress={() => {setVisible(true); setImage(require('./assets/image4.jpg'))}}>
          <Image 
              style={styles.img}
              source={require('./assets/image4.jpg')} 
            />
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: '#c8c8c8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  }
});
