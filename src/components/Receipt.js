import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';


const Receipt = () => {
  const {params} = useRoute();
  const navigation = useNavigation();
  const data=params?.cartItems;
  const calculateTotal = () => {
    return data.reduce((total, product) => total + (product.price * product.quantity), 0).toFixed(2);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Thanks for Shopping</Text>
      <ScrollView contentContainerStyle={styles.receiptContainer}>
        {data.map((product, index) => (
          <View key={index} style={styles.productRow}>
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productDetails}>{`Quantity: ${product.quantity}`}</Text>
            <Text style={styles.productDetails}>{`Price: $${product.price}`}</Text>
            <Text style={styles.productTotal}>{`Total: $${product.price * product.quantity}`}</Text>
          </View>
        ))}
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total Bill</Text>
          <Text style={styles.totalAmount}>{`$${calculateTotal()}`}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Receipt

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  receiptContainer: {
    flexGrow: 1,
  },
  productRow: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
  productDetails: {
    fontSize: 16,
    color: '#555',
  },
  productTotal: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
