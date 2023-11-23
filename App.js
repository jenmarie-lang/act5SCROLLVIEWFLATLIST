import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', name: 'Jenmarie Cumahig', address: 'Tubigon' },
  { id: '2', name: 'Mary Joy Andamon', address: 'Clarin' },
  { id: '3', name: 'Cassey James Iyana', address: 'Catigbian' },
  { id: '4', name: 'Andrey Samson', address: 'Manila' },
  { id: '5', name: 'Cherilyn Cacho', address: 'Tagbilaran' },
  { id: '6', name: 'Darel Cabatana', address: 'Tan awan' },
  { id: '7', name: 'Elyn Serohijos', address: 'CDO' },
  { id: '8', name: 'Melody Narbay', address: 'Tubigon' },
  { id: '9', name: 'Marjun Cumahig', address: 'Cebu' },
  { id: '10', name: 'Marites Jubahib', address: 'Davao' },
];

const getInitials = (name) => {
  const nameArray = name.split(' ');
  return nameArray.map((word) => word[0]).join('').toUpperCase();
};

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Guests using ScrollView</Text>
        {data.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
            </View>
            <View>
              <Text style={styles.boldText}>{item.name}</Text>
              <Text style={styles.smallText}>{item.address}</Text>
            </View>
            <Text style={styles.dots}>{'\u2022\u2022\u2022'}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.heading}>Guests using FlatList</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.boldText}>{item.name}</Text>
            <Text style={styles.smallText}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  heading: { fontWeight: 'bold', fontSize: 18, marginTop: 20 },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginTop: 10,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0077cc', // Updated color
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: 'white', // Updated color
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 12,
  },
  dots: {
    marginLeft: 'auto',
    marginRight: 15,
    fontSize: 20,
  },
});

export default App;
