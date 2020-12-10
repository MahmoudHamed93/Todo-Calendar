import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AppHeader from '../Components/AppHeader';
import {
    getListData,
    showAddModal,
    addNewTodoAction,
    searchForItemsByDesc,
    handleCheckingTodo
} from '../../Store/Actions'
import { useDispatch, useSelector } from 'react-redux'
import ListComponent from '../Components/ListComponent';
import SearchComp from '../Components/SearchComp';
import AddEventButton from '../Components/AddEventButton';
import AddTodoModal from '../Components/AddTodoModal'
import moment from 'moment'

const MainPage = (props) => {
    const dispatch = useDispatch()

    const { todoData, showModal, searchText, searchAbleData } = useSelector(
        ({ TodoList }) => ({
            todoData: TodoList.todoData,
            showModal: TodoList.showModal,
            searchText: TodoList.searchText,
            searchAbleData: TodoList.searchAbleData
        })
    );

    useEffect(() => {
        dispatch(getListData())
    }, [])

    const handleSearchClick = (text) => {
        dispatch(searchForItemsByDesc(text))
    }

    const handleAddPress = () => {
        dispatch(showAddModal(true))
    }

    const handleCloseModal = () => {
        dispatch(showAddModal(false))
    }

    const handleAddingTodo = (day, date, time, desc) => {
        dispatch(addNewTodoAction(day, date, time, desc))
    }

    const handleTogglingDone = (item, index) => {
        dispatch(handleCheckingTodo({
            day: moment(item.day).format('dddd'),
            date: moment(item.day).format('DD/MM/YYYY'),
            index
        }))
    }

    return (
        <>
            <SafeAreaView style={styles.safeAreaStyles} />
            <AppHeader hideArrow pageName={'Todo Calendar'} />

            <View style={styles.contStyles}>

                <SearchComp onSearchClick={handleSearchClick} />

                <ListComponent
                    todoData={todoData}
                    data={Object.keys(todoData)}
                    searchText={searchText}
                    searchAbleData={searchAbleData}
                    handleTogglingDone={handleTogglingDone}
                />

                <AddEventButton handleAddPress={handleAddPress} />
                <AddTodoModal showModal={showModal} handleCloseModal={handleCloseModal} handleAddingTodo={handleAddingTodo} />
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

export default MainPage