import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Закуски',
    data: [
      { name: 'Хумус', price: '$5.00' },
      { name: 'Мутабал', price: '$5.00' },
      { name: 'Фалафель', price: '$7.50' },
      { name: 'Мариновані оливки', price: '$5.00' },
      { name: 'Кофта', price: '$5.00' },
      { name: 'Салат з баклажанів', price: '$8.50' },
    ],
  },
  {
    title: 'Основні страви',
    data: [
      { name: 'Лентичний бургер', price: '$10.00' },
      { name: 'Копчений лосось', price: '$14.00' },
      { name: 'Кофта-бургер', price: '$11.00' },
      { name: 'Турецький кебаб', price: '$15.50' },
    ],
  },
  {
    title: 'Додатки',
    data: [
      { name: 'Картопля фрі', price: '$3.00' },
      { name: 'Рис з маслом', price: '$3.00' },
      { name: 'Грінки', price: '$3.00' },
      { name: 'Піта', price: '$3.00' },
      { name: 'Лентичний суп', price: '$3.75' },
      { name: 'Грецький салат', price: '$6.00' },
      { name: 'Рисовий пилав', price: '$4.00' },
    ],
  },
  {
    title: 'Десерти',
    data: [
      { name: 'Баклава', price: '$3.00' },
      { name: 'Тартуфо', price: '$3.00' },
      { name: 'Тірамісу', price: '$5.00' },
      { name: 'Пана Кота', price: '$5.00' },
    ],
  },
];

export default function MenuItems() {
  return (
    <SectionList
      sections={menuItemsToDisplay}
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <View style={styles.menuItem}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#333333',
  },
  itemName: {
    color: '#F4CE14',
    fontSize: 16,
  },
  itemPrice: {
    color: '#F4CE14',
    fontSize: 16,
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});