import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_ITEM } from '../redux/actionTypes';
import { Item } from '../components/Item.js';
import { Product } from '../components/Product.js';

const allProductItems = [
  { id: 1, name: 'Milk' },
  { id: 2, name: 'Bread' },
  { id: 3, name: 'Eggs' },
  { id: 4, name: 'Pasta' },
  { id: 5, name: 'Orange Juice' },
];

// function Item({ product, action }) {
//   return (
//     <View style={styles.product}>
//       <Text style={styles.productName}>{product.name}</Text>
//       {action}
//     </View>
//   );
// }

// function Product({ product, addToCart, productInCart }) {
//   return (
//     <Item
//       product={product}
//       action={
//         productInCart ? (
//           <Text style={styles.inCartText}>Item In Cart</Text>
//         ) : (
//           <Button title="Add to Cart" onPress={addToCart} />
//         )
//       }
//     />
//   );
// }

export default function Products() {
    const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      {allProductItems.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={() => dispatch({type: ADD_ITEM, payload: product})}
          productInCart={false}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  product: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },

  productName: {
    color: 'black',
    fontSize: 18,
    fontWeight: '300',
  },

  noItemsText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },

  inCartText: {
    fontSize: 16,
    color: 'grey',
  },

  darkModeBackground: {
    backgroundColor: 'black',
  },

  darkModeText: {
    color: 'white',
  },

  darkModeButton: {
    position: 'absolute',
    bottom: 10,
  },
});