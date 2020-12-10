import React, { useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TextInput
} from "react-native";
import moment from 'moment'
import DatePicker from 'react-native-date-picker'

const WIDTH = Dimensions.get('screen').width

const AddTodoModal = (props) => {
    const [date, setDate] = useState(new Date())
    const [descText, setDescText] = useState('')

    const handleSubmitting = () => {
        props.handleAddingTodo(moment(date).format('dddd'), moment(date).format('DD/MM/YYYY'), moment(date).format('hh:mm'), descText)
    }

    return (
        <View style={styles.contStyles}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.showModal}
                style={{ width: WIDTH }}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.titleStyles}>Add Todo</Text>

                        <DatePicker
                            date={date}
                            onDateChange={setDate}
                        />

                        <TextInput
                            style={styles.inputStyles}
                            placeholder={'Description'}
                            keyboardType={'default'}
                            placeholderTextColor={'#8C98A9'}
                            onChangeText={text => setDescText(text)}
                            value={descText}
                            returnKeyType={'done'}
                        />
                        <View style={styles.buttonCont}>
                            <TouchableOpacity
                                onPress={handleSubmitting}
                                style={styles.buttonStyles}>
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonStyles} onPress={props.handleCloseModal}>
                                <Text style={styles.modalText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: WIDTH - 60,
        height: 480,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titleStyles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#24539D',
        alignSelf: 'center',
        marginBottom: 20
    },
    inputStyles: {
        width: '100%',
        height: 80,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#24539D',
        marginTop: 20,
        padding: 4
    },
    buttonCont: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    },
    buttonStyles: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#24539D',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AddTodoModal;