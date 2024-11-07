import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
  { name: 'Хумус', price: '$5.00', id: '1A' },
  { name: 'Мутабал', price: '$5.00', id: '2B' },
  { name: 'Фалафель', price: '$7.50', id: '3C' },
  { name: 'Мариновані оливки', price: '$5.00', id: '4D' },
  { name: 'Кофта', price: '$5.00', id: '5E' },
  { name: 'Салат з баклажанів', price: '$8.50', id: '6F' },
  { name: 'Лентичний бургер', price: '$10.00', id: '7G' },
  { name: 'Копчений лосось', price: '$14.00', id: '8H' },
  { name: 'Кофта-бургер', price: '$11.00', id: '9I' },
  { name: 'Турецький кебаб', price: '$15.50', id: '10J' },
  { name: 'Картопля фрі', price: '$3.00', id: '11K' },
  { name: 'Рис', price: '$3.00', id: '12L' },
  { name: 'Піта', price: '$3.00', id: '13M' },
  { name: 'Суп із сочевиці', price: '$3.75', id: '14N' },
];

const MenuItem = ({ name, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
};

export default function MenuItems() {
  return (
    <FlatList
      data={menuItemsToDisplay}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MenuItem name={item.name} price={item.price} />
      )}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#333333',
    padding: 16,
    flexGrow: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    color: '#FFD700',
  },
  itemPrice: {
    fontSize: 16,
    color: '#FFD700',
  },
});