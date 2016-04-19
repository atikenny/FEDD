const sticky = (state = false, action) => {
    switch (action.type) {
        case 'HIDE_STICKY':
            return true;
        case 'SHOW_STICKY':
            return false;
        default:
            return state;
    }
};

export default sticky;
