import React, { useState } from 'react';
import { StyleSheet, View, Text,  Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);

  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      // search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder=""
      // searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => 
       <View style={{ flexDirection: 'row' }} >
         <Image style={{ width: 16, height: 16.5 }} source={require('../../../src/assets/arrow.png')} />
         <Text style={{ fontSize: 14.5, fontWeight: '600', marginLeft: 10, color: '#9778A1'}}>I want to </Text>
       </View>
      }
      renderItem={renderItem}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    marginTop: 14,
    height: 40,
    width: 202,
    backgroundColor: '#2D1735',
    borderRadius:4,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#111525',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: '#9778A1'

  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14.5,
    fontWeight: '600',
    color: '#FFFF'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 0,
    fontSize: 0,
  backgroundColor: '#2D1735'
  },
});
