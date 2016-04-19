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

export const hideSticky = () => {
    return {
        type: 'HIDE_STICKY'
    };
};

export const showSticky = () => {
    return {
        type: 'SHOW_STICKY'
    };
};
