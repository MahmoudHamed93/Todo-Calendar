import {
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAILURE,
    SHOW_ADD_TODO_MODAL,
    ADD_NEW_TODO_ITEM,
    SEARCH_FOR_ITEMS,
    TOGGLE_TODO_DONE_CHECKBOX
} from '../Types'
import { todoList } from '../Services'


export const getListData = () => dispatch => {
    dispatch({
        type: GET_TODO_LIST
    })
    todoList()
        .then((res) => {
            dispatch({
                type: GET_TODO_LIST_SUCCESS,
                payload: res
            })
        })
        .catch((e) => {
            dispatch({
                type: GET_TODO_LIST_FAILURE,
                payload: e
            })
        })
}


export const showAddModal = (bool) => dispatch => {
    dispatch({
        type: SHOW_ADD_TODO_MODAL,
        payload: bool
    })
}

export const addNewTodoAction = (day, date, time, desc) => dispatch => {
    dispatch({
        type: ADD_NEW_TODO_ITEM,
        payload: { day, date, time, desc }
    })
}

export const searchForItemsByDesc = (text) => dispatch => {
    dispatch({
        type: SEARCH_FOR_ITEMS,
        payload: text
    })
}

export const handleCheckingTodo = (item) => dispatch => {
    dispatch({
        type:TOGGLE_TODO_DONE_CHECKBOX,
        payload:{...item}
    })
}