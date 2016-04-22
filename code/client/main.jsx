import React                from 'react';
import { Meteor }           from 'meteor/meteor';
import { render }           from 'react-dom';
import { Provider }         from 'react-redux';
import { createStore }      from 'redux';
import listApp              from '../imports/ui/reducers';
import FEDD                 from '../imports/ui/FEDD.jsx';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';

let store = createStore(listApp);

Meteor.startup(() => {
    render(
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Provider store={store}>
                <FEDD />
            </Provider>
        </MuiThemeProvider>,
        document.getElementById('app-root')
    );
});
