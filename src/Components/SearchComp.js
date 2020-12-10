import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const SearchComp = props => {
  const [text, setText] = useState('');
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        testID={'Search-Bar'}
        placeholder="Todo Description"
        onChangeText={searchString => {
          setText(searchString);
        }}
        value={text}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity testID={'Search-Button'} onPress={() => props.onSearchClick(text)}>
        <Text style={styles.textStyles}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    width: '90%',
    display: 'flex',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 12,
    alignSelf:'center',
    borderWidth:1,
    padding:4
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  textStyles: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#24539D',
  },
});

export default SearchComp;