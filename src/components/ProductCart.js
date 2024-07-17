import React from 'react'

import { View, Text, StyleSheet,Image } from 'react-native'
import Animated from 'react-native-reanimated'

const ProductCart = ({data}) => {
  return (
    <View style={styles.container}>
      <Animated.Image sharedTransitionTag={`T${data.id}`}
      style={styles.Image}
      source={data.thumbnail}  />
      <Text style={styles.Price}>
        <Text style={{color:'#24a8af'}}>$</Text>
        {data?.price}</Text>
      <Text style={styles.ProductName}>{data?.title}</Text>
    </View>
  )
}
 const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        margin:15,
        padding:5
    },
    Image:{
        width:150,
        height:150,
        resizeMode:'contain'
    },
    Price:{
        fontSize:18,
        color:'#323232',
        fontWeight:'600'
    },
    ProductName:{
        fontSize:16,
        color:'#323232',
        fontWeight:'bold'
    }
 })

export default ProductCart;
