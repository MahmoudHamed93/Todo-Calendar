import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const ListComponent = props => {
  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      todoData={props.todoData}
      searchText={props.searchText}
      searchAbleData={props.searchAbleData}
      disableCheckBox={props.disableCheckBox}
      handleTogglingDone={props.handleTogglingDone}
    />
  );

  return (
    <>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        style={styles.flatListStyles}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
        onRefresh={props.handleOnPageRefresh}
        refreshing={props.refreshing}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatListStyles: {
    backgroundColor: '#FFF',
    height: '100%',
    padding: 20,
  },
  flatListContent: {
    paddingBottom: 160,
  },
});

export default ListComponent;