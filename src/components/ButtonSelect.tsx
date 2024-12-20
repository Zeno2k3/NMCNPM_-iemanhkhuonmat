import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import TextComponent from './TextComponent';
import { fontFamilies } from '../constants/appfontFamilies';
import { appColor } from '../constants/appClor';
import { ArrowDown2 } from 'iconsax-react-native';

interface Props {
  name: string;
  list?: { id: string; name: string }[];
}

const ButtonSelect = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [isListVisible, setIsListVisible] = useState(false); 
  const { name, list } = props;

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  const handleSelect = (itemName: string) => {
    setSelectedItem(itemName);
    setIsListVisible(false);
  };

  const renderItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => handleSelect(item.name)}>
      <Text style={styles.listItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
          <View style = {styles.children}>
          <TextComponent text={name} font={fontFamilies.bold} />
          </View>
            <View style = {styles.row}>
              <TextComponent text={selectedItem || 'Chọn'}
              styles = {{
                  fontFamily: fontFamilies.regular,
                  fontSize: 18
              }} />
              <TouchableOpacity onPress={toggleList}>
                <ArrowDown2 size={16}/>
              </TouchableOpacity>
            </View>
        {isListVisible && (
          <View style={styles.dropdown}>
            <FlatList
              data={list}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default ButtonSelect;

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 42,
    elevation: 3,
    borderRadius: 20,
    backgroundColor: appColor.white,
    zIndex: 10
  },
  children: {
    position: 'relative',
    paddingHorizontal: 10,
    bottom: 12,
    left: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: "100%",
    bottom: 15,
  },
  dropdown: {
    position: 'absolute',
    left: 0,
    width: '120%',
    backgroundColor: appColor.white,
    elevation: 5,
    borderRadius: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: appColor.gray || '#ccc',
  },
  listItemText: {
    fontSize: 10,
  },
});
