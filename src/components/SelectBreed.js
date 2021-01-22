import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import colors from '../constants/colors';

const SelectBreedComponent = ({catsList, selectedItem, handleSelectChange}) => {
  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedItem} onValueChange={handleSelectChange}>
          {catsList &&
            catsList.map((cat) => (
              <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
            ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.pink,
    borderRadius: 10,
  },
});

export default SelectBreedComponent;
