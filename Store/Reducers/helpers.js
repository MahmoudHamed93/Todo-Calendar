export const getSearchAbleData = (data) => {
    return Object.values(data).map((item) => {
        return item.list
    }).flat()
}

export const getFilteredData = (data, text) => {
    return Object.keys(data)
        .reduce((acc, item) => {
            return {
                ...acc,
                [item]: {
                    list: data[item].list.filter((item) => {
                        return item.description?.toLowerCase()?.includes(text.toLowerCase())
                    })
                }
            }
        }, {})
}

export const toggleSpecificTodo = (data, index) => {
    return data.list.map((val, ind) => {
        if (ind === index) {
            return {
                ...val,
                done: !val.done
            }
        }
        return {
            ...val
        }
    })
}