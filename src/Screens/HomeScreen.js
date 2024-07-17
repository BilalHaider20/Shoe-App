import React from 'react' 
import { View, Text,StyleSheet, FlatList, TouchableOpacity } from 'react-native'
  import MenuIcon from '../Assets/SVG/MenuIcon';
 import OptionIcon from '../Assets/SVG/OptionIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCart from '../components/ProductCart';
import { productData } from '../Data/ProductData';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation= useNavigation();
  return (
    <View style={styles.container}>
        <SafeAreaView/>

            {/* Header */}
            <View style={styles.header}>
            <Animated.View entering={FadeInLeft.delay(100).duration(400)}>
              <MenuIcon />
            </Animated.View>
            <Animated.View entering={FadeInRight.delay(100).duration(400)}>
            < OptionIcon/>
            </Animated.View>
            </View>
       <View style={styles.headerWrapper}>
      <Animated.Text
      entering={FadeInLeft.delay(200).duration(500)}
      style={styles.headerText}>Nike Shoes</Animated.Text>
      <Animated.Text
      entering={FadeInLeft.delay(300).duration(500)}
      style={styles.headerSubtext}>Product of your choice</Animated.Text>
    
    </View>

      {/* <ProductCart/> */}
     <FlatList 
     data={productData}
     renderItem={({item,index})=>(
      <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{data:item})}>
        <ProductCart data={item} />
      </TouchableOpacity>
      </Animated.View>
     )}
     keyExtractor={item=>item.id}
     numColumns={2} 
     contentContainerStyle={{alignItems:'center'}}
     showsVerticalScrollIndicator={false}
     />
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:20
    },
    headerWrapper:{
        paddingHorizontal:20,
        justifyContent:'center',
        gap:5
    },
    headerText:{
        fontSize:30,
        color:'#000',
        fontWeight:'bold',
    },
    headerSubtext:{
        fontSize:18,
        color:'grey',
        marginBottom:15,
        fontWeight:'600'
    }
})