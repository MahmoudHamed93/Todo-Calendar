import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CheckBoxComp = props => {
    return (
        <View style={styles.checkboxContainer}>
            <CheckBox
                hideBox
                boxType='square'
                value={props.checked}
                onValueChange={props.onChange}
                style={props.disableCheckBox ? styles.disabledStyles : styles.checkboxStyles}
                disabled={props.disableCheckBox}
            />
            <Text style={props.disableCheckBox ? styles.disabledLabel :styles.label}>{props.label}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: "center",
    },
    checkboxStyles: {
        alignSelf: "center",
        width: 21,
        height: 21,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#24539D',
        overflow: 'hidden',
    },
    disabledStyles:{
        alignSelf: "center",
        width: 21,
        height: 21,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'grey',
        overflow: 'hidden',
    },
    label: {
        fontSize: 14,
        marginLeft: 12,
        color: '#24539D'
    },
    disabledLabel:{
        fontSize: 14,
        marginLeft: 12,
        color: 'grey'
    }
});

export default CheckBoxComp

