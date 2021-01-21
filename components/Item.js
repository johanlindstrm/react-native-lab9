import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export function Item({ product, action }) {
  return (
    <View style={styles.product}>
      <Text style={styles.productName}>{product.name}</Text>
      {action}
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