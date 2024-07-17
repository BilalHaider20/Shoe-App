import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
const SplashScreen = () => {
    const {navigate} = useNavigation();
    setTimeout(()=>{
        navigate('Home');
    },3000)
  return (
    <View style={styles.container}>
      
      <LottieView source={require('../Assets/Animations/ShowAnimation.json')}
        style={{height:300,width:300}}
        autoPlay loop
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#de752a'
    }
})