import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ThemeContext } from '../context/ThemeContext.js'

export function Item({ product, action }) {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <View style={{...styles.product, backgroundColor: isDarkMode ? 'black' : 'white'}}>
      <Text style={{...styles.productName, color: isDarkMode ? 'white' : 'black'}}>{product.name}</Text>
      {action}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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