import {
    GET_TODO_LIST,
    GET_TODO_LIST_SUCCESS,
    GET_TODO_LIST_FAILURE,
    SHOW_ADD_TODO_MODAL,
    ADD_NEW_TODO_ITEM,
    SEARCH_FOR_ITEMS,
    TOGGLE_TODO_DONE_CHECKBOX
} from '../Types'
import { getFilteredData, toggleSpecificTodo } from './helpers'

const INITIAL_STATE = {
    loading: true,
    todoData: {},
    showModal: false,
    searchText: '',
    searchAbleData: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TODO_LIST:
            return {
                ...state,
                loading: true
            }

        case GET_TODO_LIST_SUCCESS:
            return {
                ...state,
                todoData: action.payload,
                loading: false
            }

        case GET_TODO_LIST_FAILURE:
            return {
                ...state,
                loading: false
            }

        case SHOW_ADD_TODO_MODAL:
            return {
                ...state,
                showModal: action.payload
            }

        case ADD_NEW_TODO_ITEM:
            if (state.todoData[action.payload.date]) {
                return {
                    ...state,
                    todoData: {
                        ...state.todoData, [action.payload.date]: {
                            ...state.todoData[action.payload.date],
                            list: [
                                ...state.todoData[action.payload.date]?.list,
                                {
                                    date: action.payload.date,
                                    time: action.payload.time,
                                    description: action.payload.desc,
                                    done: false
                                }
                            ]
                        }
                    },
                    showModal: false
                }
            }
            return {
                ...state,
                todoData: {
                    ...state.todoData,
                    [action.payload.date]: {
                        name: action.payload.day,
                        list: [
                            {
                                date: action.payload.date,
                                time: action.payload.time,
                                description: action.payload.desc,
                                done: false
                            }
                        ]
                    }
                },
                showModal: false
            }


        case SEARCH_FOR_ITEMS:
            return {
                ...state,
                searchText: action.payload,
                searchAbleData: getFilteredData(state.todoData, action.payload)
            }

        case TOGGLE_TODO_DONE_CHECKBOX:
            return {
                ...state,
                todoData: {
                    ...state.todoData, [action.payload.date]: {
                        ...state.todoData[action.payload.date],
                        list: toggleSpecificTodo(state.todoData[action.payload.date], action.payload.index)
                    }
                },
            }

        default:
            return state;
    }
}