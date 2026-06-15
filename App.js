// App.js
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';

const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* หน้าจอซ้าย */}
        <View style={styles.phoneContainer}>
          <Text style={styles.title}>หน้าจอซ้าย (Grid 2 คอลัมน์)</Text>
          <View style={styles.leftGrid}>
            {items.map((item, index) => (
              <View key={index} style={styles.leftItem}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* หน้าจอขวา */}
        <View style={styles.phoneContainer}>
          <Text style={styles.title}>หน้าจอขวา (Flex Wrap 3 คอลัมน์)</Text>
          <View style={styles.rightGrid}>
            {items.map((item, index) => (
              <View key={index} style={styles.rightItem}>
                <Text style={styles.itemText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f0f0' },
  scrollContainer: { 
    flexGrow: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 20,
    gap: 30 
  },
  phoneContainer: { alignItems: 'center' },
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15, 
    color: '#333' 
  },

  /* ===== หน้าจอซ้าย (2 คอลัมน์) ===== */
  leftGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 260,
    gap: 15,
  },
  leftItem: {
    width: 110,
    height: 110,
    backgroundColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  /* ===== หน้าจอขวา (3 คอลัมน์) ===== */
  rightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 310,
    gap: 12,
  },
  rightItem: {
    width: 88,
    height: 88,
    backgroundColor: '#d1d5db',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  itemText: {
    color: '#1e3a8a',
    fontSize: 17,
    fontWeight: '600',
  },
});