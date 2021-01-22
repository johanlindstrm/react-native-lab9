/** Product **/
import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { Item } from './Item';

export function Product({ product, addToCart, productInCart }) {
  return (
    <Item
      product={product}
      action={
        productInCart ? (
          <Text style={styles.inCartText}>Item In Cart</Text>
        ) : (
          <Button title="Add to Cart" onPress={addToCart} />
        )
      }
    />
  );
}

const styles = StyleSheet.create({

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