import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const AddEventButton = (props) => {
    return (
        <TouchableOpacity onPress={props.handleAddPress} style={styles.contStyles}>
            <Text style={styles.textStyles}>Add</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contStyles: {
        backgroundColor: '#24539D',
        width: 50,
        height: 50,
        position: 'absolute',
        bottom: '17%',
        right:'5%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center'
    },
    textStyles: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default AddEventButton;