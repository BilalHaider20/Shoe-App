import React,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
      
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }, 3000); 
    }, [navigation]);
  return (
    <View style={styles.container}>
      
      <LottieView source={require('../Assets/Animations/ShowAnimation.json')}
        style={{height:300,width:300}}
        autoPlay
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