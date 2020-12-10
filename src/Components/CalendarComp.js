import React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment'
import { Calendar } from 'react-native-calendars';

const CalendarComp = (props) => {
    return (
        <>
            <View style={styles.contStyles}>
                <Calendar
                    style={styles.calendarStyles}
                    current={moment().format('YYYY/MM/DD')}
                    minDate={moment().subtract(1, 'years').format('YYYY/MM/DD')}
                    maxDate={moment().add(1, 'years').format('YYYY/MM/DD')}
                    onDayPress={(day) => props.setSelectedDate(moment(day.dateString).format('DD/MM/YYYY'))}
                    monthFormat={'yyyy MM'}
                    hideExtraDays={true}
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    onPressArrowRight={addMonth => addMonth()}
                />
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
        backgroundColor: '#fff',
        padding: 8,
    },
    calendarStyles: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        overflow: 'hidden',
        height: 350,
        margin: 12
    }
})

export default CalendarComp