import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { CartItem } from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { CHECK_OUT,REMOVE_ITEM } from '../redux/actionTypes';
import { ToggleButton } from '../components/ToggleButton.js'

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ToggleButton/>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          product={item}
          removeFromCart={
            () => dispatch({type: REMOVE_ITEM, payload: item.id})
            // dispatch({ type: REMOVE_ITEM, payload: item.id })
          }
        />
      ))}
      {cartItems.length > 0 ? (
        <Button
          title="Check out"
          onPress={() => dispatch({ type: CHECK_OUT })}
        />
      ) : (
        <Text style={styles.noItemsText}>No Items in the Cart</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemsText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});