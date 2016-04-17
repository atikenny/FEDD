import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import listApp from '../imports/ui/reducers/items.js';
import FEDD from '../imports/ui/FEDD.jsx';

let store = createStore(listApp);

Meteor.startup(() => {
    render(
        <Provider store={store}>
            <FEDD />
        </Provider>,
        document.getElementById('app-root')
    );
});
