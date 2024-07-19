import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import Animated,{FadeInDown} from 'react-native-reanimated'
import ProductCart from './ProductCard'
const FavouriteProduct = () => {
  return (
    <View>
      <FlatList 
     data={productData} //change the data
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

export default FavouriteProduct

const styles = StyleSheet.create({})