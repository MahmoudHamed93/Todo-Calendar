import moment from 'moment'

const todoData = {
    [moment().format('DD/MM/YYYY')]: {
        name: moment().format('dddd'),
        list: [
            {
                date: moment().format('DD/MM/YYYY'),
                time: '8 AM',
                description: 'Wake up',
                done: false
            },
            {
                date: moment().format('DD/MM/YYYY'),
                time: '9 AM',
                description: 'Start Working',
                done: false
            },
            {
                date: moment().format('DD/MM/YYYY'),
                time: '1 PM',
                description: 'Take a break',
                done: false
            },
            {
                date: moment().format('DD/MM/YYYY'),
                time: '6 PM',
                description: 'Go Back Home',
                done: false
            },
        ]
    },
    [moment().add(1, 'days').format('DD/MM/YYYY')]: {
        name: moment().add(1, 'days').format('dddd'),
        list: [
            {
                date: moment().add(1, 'days').format('DD/MM/YYYY'),
                time: '8 AM',
                description: 'Wake up',
                done: false
            },
            {
                date: moment().add(1, 'days').format('DD/MM/YYYY'),
                time: '9 AM',
                description: 'Start Working',
                done: false
            },
            {
                date: moment().add(1, 'days').format('DD/MM/YYYY'),
                time: '1 PM',
                description: 'Take a break',
                done: false
            },
            {
                date: moment().add(1, 'days').format('DD/MM/YYYY'),
                time: '6 PM',
                description: 'Go Back Home',
                done: false
            },
        ]
    },
    [moment().add(2, 'days').format('DD/MM/YYYY')]: {
        name: moment().add(2, 'days').format('dddd'),
        list: [
            {
                date: moment().add(2, 'days').format('DD/MM/YYYY'),
                time: '8 AM',
                description: 'Wake up',
                done: false
            },
            {
                date: moment().add(2, 'days').format('DD/MM/YYYY'),
                time: '9 AM',
                description: 'Start Working',
                done: false
            },
            {
                date: moment().add(2, 'days').format('DD/MM/YYYY'),
                time: '1 PM',
                description: 'Take a break',
                done: false
            },
            {
                date: moment().add(2, 'days').format('DD/MM/YYYY'),
                time: '6 PM',
                description: 'Go Back Home',
                done: false
            },
        ]
    },
    [moment().add(3, 'days').format('DD/MM/YYYY')]: {
        name: moment().add(3, 'days').format('dddd'),
        list: [
            {
                date: moment().add(3, 'days').format('DD/MM/YYYY'),
                time: '8 AM',
                description: 'Wake up',
                done: false
            },
            {
                date: moment().add(3, 'days').format('DD/MM/YYYY'),
                time: '9 AM',
                description: 'Start Working',
                done: false
            },
            {
                date: moment().add(3, 'days').format('DD/MM/YYYY'),
                time: '1 PM',
                description: 'Take a break',
                done: false
            },
            {
                date: moment().add(3, 'days').format('DD/MM/YYYY'),
                time: '6 PM',
                description: 'Go Back Home',
                done: false
            },
        ]
    }
}

export const todoList = () => {
    return new Promise((resolve, reject) => {
        resolve(todoData);
    })
}