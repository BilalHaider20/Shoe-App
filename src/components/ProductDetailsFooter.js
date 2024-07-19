import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CartIcon from '../Assets/SVG/CartIcon'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart } from '../redux/Action'
import HeartIcon from '../Assets/SVG/HeartIcon'

const ProductDetailsFooter = ({ data }) => {
  const navigation = useNavigation();
  const [isFav, setisFav] = useState(false);
  const [isAdded, setisAdded] = useState(false);
  const [Total_Price, setTotal_Price] = useState(data.price);
  const item = data;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const AddItemToCart = (item) => {
    dispatch(AddToCart(item));
  }

  useEffect(() => {
    let ItemAdded = cartItems.find(i => i.id === item.id);
    
    if (ItemAdded) {
      setisAdded(true);
      setTotal_Price(ItemAdded.TotalBill);
    }
    else {
      setisAdded(false);
      setTotal_Price(item.price);
    }
  }, [cartItems])




  return (
    <Animated.View entering={FadeInDown.delay(100).duration(200)} style={styles.container}>
      <View style={styles.PriceBox}>
        <Text style={{ fontSize: 16, color: '#707B81', }}>Price</Text>
        <Text style={{ fontSize: 20, color: '#1A2530', }}>${Total_Price}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 10 }}>
        {isAdded ?
          <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Cart')} >
            <Text style={styles.BtnText}>View Cart</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={styles.Btn} onPress={() => {
            AddItemToCart(item)
          }}>
            <Text style={styles.BtnText}>Add to Cart</Text>
          </TouchableOpacity>
        }

        <TouchableOpacity style={styles.IconBox} onPress={() => setisFav(!isFav)} >
          <HeartIcon isFav={isFav} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#e6e3da",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 100
  },
  PriceBox: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },

  Btn: {
    backgroundColor: '#24a8af',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,

    elevation: 3,
  },
  BtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'

  },
  IconBox: {
    backgroundColor: '#FFF',
    height: 50,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
})

export default ProductDetailsFooter