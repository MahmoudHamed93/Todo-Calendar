import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBoxComp from '../Components/CheckBoxComp'

const ListItem = props => {
    const getListItemData = () => {
        return props.searchText?.length ? props.searchAbleData[props.item].list : props.todoData[props.item]?.list
    }

    return (
        <View style={styles.contStyles}>
            <Text style={styles.titleStyles}>{props.todoData[props.item].name}{'  '}{props.item}</Text>
            {getListItemData().map((item, index) => {
                return (<View
                    key={index}
                    testID={`Cat-Button-${props.index}`}
                    style={styles.buttonStyles}>
                    <View style={styles.innerView}>
                        <Text style={styles.textStyles}>Date : {item?.date}</Text>
                        <Text style={styles.textStyles}>Time : {item?.time}</Text>
                    </View>

                    <View style={styles.innerView}>
                        <Text style={styles.textStyles}>
                            Description : {item?.description}
                        </Text>
                        <CheckBoxComp
                            label='Done'
                            checked={item?.done}
                            disableCheckBox={props.disableCheckBox}
                            onChange={() => props.handleTogglingDone(item,index)}
                        />

                    </View>

                </View>)
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    contStyles: {
        width: '100%',
        marginBottom: 16
    },
    titleStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#24539D',
        alignSelf: 'flex-start',
        marginBottom: 12
    },
    buttonStyles: {
        width: '100%',
        backgroundColor: '#fff',
        height: 80,
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 4,
        borderRadius: 5,
        padding: 12,
        borderWidth: 1,
        borderColor: '#24539D',
        borderRadius: 10
    },
    innerView: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row'
    },
    textStyles: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#24539D',
    },
});

export default ListItem;