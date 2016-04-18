let nextItemId = 0;

export const addItem = (text) => {
    return {
        type: 'ADD_ITEM',
        id: nextItemId++,
        text
    };
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        id
    };
}
