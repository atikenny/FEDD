const scrollTop = (state = 0, action) => {
    switch (action.type) {
        case 'SET_SCROLL_TOP':
            return action.scrollTop;
        default:
            return state;
    }
};

export default scrollTop;
