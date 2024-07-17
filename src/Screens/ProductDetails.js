import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image,ScrollView,FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackIcon from '../Assets/SVG/BackIcon';
import HeartIcon from '../Assets/SVG/HeartIcon';
import { SuggestedProducts } from '../Data/SuggestedProducts';
import Animated, { FadeInDown, FadeInLeft, FadeInRight } from 'react-native-reanimated';

const ProductDetails = () => {
  const { params } = useRoute();
  const navigation =useNavigation();
  const [isFav, setisFav] = useState(false);
  const data= params?.data;
  return (
    <View style={styles.container}>

      {/* header */}
      <View style={styles.headerBackground}>
        <SafeAreaView>
          <View style={styles.iconContainer}>
            <Animated.View entering={FadeInLeft.delay(100).duration(300)}>
            <TouchableOpacity style={styles.IconBox} onPress={()=>navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
            </Animated.View>

            <Animated.View entering={FadeInRight.delay(100).duration(300)}>
            <TouchableOpacity style={styles.IconBox} onPress={()=>setisFav(!isFav)}>
              <HeartIcon isFav={isFav} />
            </TouchableOpacity>
            </Animated.View>

          </View>
        </SafeAreaView>

      {/* ProductImage */}
      <Animated.Image sharedTransitionTag={`T${data.id}`} source={data.thumbnail}  
      style={styles.ProductImage}
      />
      </View>
      
      {/* //Product Name*/}
      <ScrollView >
      <View style={styles.TitleBox} >
        <Animated.Text entering={FadeInLeft.delay(200).duration(300)} style={styles.ProductName} >{data.title}</Animated.Text>
        <View style={{alignItems:'center'}}>
        <Animated.Text entering={FadeInRight.delay(200).duration(300)} style={styles.Price} ><Text style={{color:'#24a8af'}} >$</Text>{data.price}</Animated.Text>
        <Animated.Text entering={FadeInRight.delay(200).duration(300)} style={styles.rating}>⭐ {data.rating}</Animated.Text>
        </View>
      </View>

      {/* Product Description */}
      <View style={styles.descriptionBox}>
        <Animated.Text entering={FadeInLeft.delay(200).duration(400)} style={styles.ProductDescription} > {data.description} </Animated.Text>
      </View>

      {/* Button */}
      <Animated.View entering={FadeInLeft.delay(200).duration(300)}>
      <TouchableOpacity style={styles.Btn}>
        <Text style={styles.BtnText} >Shop Now</Text>
      </TouchableOpacity>
      </Animated.View>

      {/* Suggested Products */}
      <Animated.Text entering={FadeInLeft.delay(200).duration(300)} style={{color:'#000',
        fontSize:20,fontWeight:'bold',
        padding:15
      }}>Suggested Products</Animated.Text>
      <Animated.View entering={FadeInDown.delay(300).duration(500)} style={{paddingHorizontal:10,marginBottom:30}}>
        <FlatList 
        data={SuggestedProducts}
        renderItem={({item})=>
        (<View style={styles.SuggestedBox}>
          <Image source={item.thumbnail} style={styles.suggestedImage} />
          <Text style={styles.SuggestedTitle} >{item.title}</Text>
        </View>)}
        keyExtractor={item=>item.id}
        horizontal
        contentContainerStyle={{columnGap:20}}
        />
      </Animated.View>

      </ScrollView>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  headerBackground: {
    backgroundColor: 'lightgrey',
    height: 280,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  IconBox: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ProductImage:{
    height:170,
    width:350,
    alignSelf:'center',
    resizeMode:'contain',
    marginTop:10
  },
  TitleBox:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:15,
    paddingVertical:5,
    alignItems:'center'
  },
  ProductName:{
    fontSize:26,
    fontWeight:'bold',
    color:'#000'
  },
  Price:{
    fontSize:22,
    fontWeight:'bold',
    color:'#000'
  },
  rating:{
    color:'green',
    fontSize:20,
    fontWeight:'500'
  },
  descriptionBox:{
    paddingVertical:15,
    paddingHorizontal:15
  },
  ProductDescription:{
    fontSize:16,
    color:'#000',
    textAlign:'Left'

  },
  Btn:{
    backgroundColor:'#24a8af',
    width:'25%',
    padding:10,
    alignItems:'center',
    marginHorizontal:15,
    borderRadius:30,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 2.84,

elevation: 4,
  },
  BtnText:{
    fontSize:15,
    color:'#FFF'
  },
  
  suggestedImage:{
    resizeMode:'contain',
    height:100,
    width:110,
    alignSelf:'center'

  },
  SuggestedTitle:{
    fontSize:14,
    color:'#000',
    fontWeight:'bold',
    // textAlign:'center',
    alignSelf:'center'
  }

})