import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveToCart, Increment, Decrement,Empty_Cart } from '../redux/Action'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import EmptyCart from '../Assets/Cart/EmptyCart'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const {navigate} = useNavigation();
    const dispatch = useDispatch();
    const [isCartEmpty, setisCartEmpty] = useState(true);
    const [ShippingCost, setShippingCost] = useState(20);
    const [SubTotal, setSubTotal] = useState(0);



    useEffect(() => {
        if (cartItems.length > 0) {
            setisCartEmpty(false);
        }
        else if (cartItems.length === 0) {
            setisCartEmpty(true);
        }
        const total_Bill = cartItems.reduce((total, item) => total + item.TotalBill, 0)
        setSubTotal(total_Bill.toFixed(2))
    }, [cartItems])

    const HandleDelete = (itemId) => {
        dispatch(RemoveToCart(itemId));
    }

    const HandleIncrement = (itemId) => {
        dispatch(Increment(itemId));
    }
    const HandleDecrement = (itemId) => {
        dispatch(Decrement(itemId));
    }
    const HandleEmptyCart=()=>{
        dispatch(Empty_Cart());
    }

    return (
        <View style={styles.container}>
            {isCartEmpty ?
                    <EmptyCart />
                :
                <>
                    <ScrollView>
                        {cartItems.map(item =>

                            <Animated.View key={item.id.toString()} style={styles.CardStyle} entering={FadeInDown.delay(100).duration(300)}>
                                <View style={{ flexDirection: 'row' }} >

                                    <Image style={styles.Image} source={item.thumbnail} />
                                    <View style={styles.InfoBox}>
                                        <Text style={styles.ProductName}>{item.title}</Text>
                                        <Text style={styles.Price}>{item.price} x {item.quantity} = {(item.price * item.quantity).toFixed(2)}</Text>
                                        <View style={styles.pagination}>
                                            <TouchableOpacity style={[styles.BtnStyle, item.quantity === 1 && { backgroundColor: '#8aaad4' }]} onPress={() => item.quantity > 1 && HandleDecrement(item.id)}>
                                                <Text style={[styles.BtnText, { color: '#FFF', fontWeight: 'bold' }]}>-</Text>
                                            </TouchableOpacity>
                                            <Text style={[styles.BtnText, { color: '#000' }]}>{item.quantity}</Text>
                                            <TouchableOpacity
                                                style={[styles.BtnStyle, item.quantity === 20 && { backgroundColor: '#8aaad4' }]}
                                                onPress={() => item.quantity < 20 && HandleIncrement(item.id)}
                                            >
                                                <Text style={[styles.BtnText, { color: '#FFF' }]}>+</Text>
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent: 'space-between', alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                    <Text style={{ color: '#000', fontSize: 16 }}>Qty:{item.quantity}</Text>
                                    <TouchableOpacity onPress={() => HandleDelete(item.id)}>
                                        <Icon name="trash-sharp" size={25} color='red' style={{ margin: 10 }} />
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        )}
                    </ScrollView>
                    <Animated.View entering={FadeInDown.delay(100).duration(200)}>
                        <View style={styles.PricingInfo}>
                            <Text style={styles.leftText}>Subtotal</Text>
                            <Text style={styles.rightText}>${SubTotal}</Text>
                        </View>
                        <View style={styles.PricingInfo}>
                            <Text style={styles.leftText}>Shipping</Text>
                            <Text style={styles.rightText}>${ShippingCost}</Text>
                        </View>
                        <View style={[styles.PricingInfo, { marginTop: 30, marginBottom: 10 }]}>
                            <Text style={styles.TotalCostText}>Total Cost</Text>
                            <Text style={styles.TotalPrice}>${(ShippingCost + (Number(SubTotal))).toFixed(2)}</Text>
                        </View>
                        <Animated.View entering={FadeIn.delay(100).duration(200)}>

                            <TouchableOpacity style={styles.BtnCheckout} onPress={()=>{
                                navigate('ExitScreen',{cartItems:cartItems})
                                HandleEmptyCart()
                        }} >
                                <Text style={styles.BtnCheckoutText}>Checkout</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>
                </>}

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#FFFFFF',
        flex: 1,
        paddingTop: 10,
    },
    CardStyle: {
        backgroundColor: '#FFFe',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 25,
        marginHorizontal: 10,
        marginVertical: 5
    },
    Image: {
        height: 60,
        width: 120,
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    InfoBox: {
        flexDirection: 'column',
        gap: 8,
        marginLeft: 10,
        flexWrap: 'wrap'
    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    BtnStyle: {
        backgroundColor: '#2b67b5',
        height: 25,
        width: 35,
        borderRadius: 25,
        alignItems: 'center'

    },
    BtnText: {
        fontSize: 16
    },
    ProductName: {
        fontSize: 20,
        color: '#000',
        marginTop: 5,
        fontWeight: '500',
        width: 120

    },
    Price: {
        fontSize: 14,
        color: '#000',
        fontWeight: '500'
    },
    PricingInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    leftText: {
        color: '#707B81',
        fontSize: 16
    },
    rightText: {
        fontSize: 18,
        color: '#000'
    },
    TotalCostText: {
        color: '#000',
        fontSize: 18
    },
    TotalPrice: {
        color: '#000',
        fontSize: 20
    }
    , BtnCheckout: {
        backgroundColor: '#5B9EE1',
        paddingHorizontal: 25,
        paddingVertical: 16,
        borderRadius: 25,
        marginHorizontal: 25,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    },
    BtnCheckoutText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    }
})