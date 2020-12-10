import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppHeader from '../Components/AppHeader';
import {
    handleCheckingTodo
} from '../../Store/Actions'
import { useDispatch, useSelector } from 'react-redux'
import CalendarComp from '../Components/CalendarComp'
import ListComponent from '../Components/ListComponent';
import moment from 'moment'

const CalendarPage = (props) => {
    const [selectedDate, setSelectedDate] = useState(null)
    const dispatch = useDispatch()

    const { todoData } = useSelector(
        ({ TodoList }) => ({
            todoData: TodoList.todoData,
        })
    );

    const handleTogglingDone = (item, index) => {
        dispatch(handleCheckingTodo({
            day: moment(item.day).format('dddd'),
            date: moment(item.day).format('DD/MM/YYYY'),
            index
        }))
    }

    const getData = () => {
        return todoData[selectedDate] ? [selectedDate] : []
    }

    return (
        <>
            <SafeAreaView style={styles.safeAreaStyles} />
            <AppHeader hideArrow pageName={'Todo Calendar'} />

            <View style={styles.contStyles}>
                <CalendarComp setSelectedDate={setSelectedDate} />
                {selectedDate && todoData[selectedDate] ?
                    <ListComponent
                        todoData={todoData}
                        data={getData()}
                        handleTogglingDone={handleTogglingDone}
                        disableCheckBox={true}
                    /> : null}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    safeAreaStyles: {
        backgroundColor: '#fff'
    },
    contStyles: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
})

export default CalendarPage