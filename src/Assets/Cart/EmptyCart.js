import { StyleSheet, View,Image,Text } from 'react-native';
import React from 'react';


const EmptyCart = () => {
  return (
    <View style={styles.container}>
     
      <Image source={require("./emptyBag.png")}  style={styles.Image}/>
      <Text style={{color:'#000',
        fontSize:16,
      }}>Your Cart is Empty.</Text>
    </View>
  );
}

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  Image:{
    height:300,
    width:300,
    resizeMode:'contain'
  }
});
