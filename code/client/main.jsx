import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { FEDD } from '../imports/ui/FEDD.jsx';

Meteor.startup(() => {
    render(
        <FEDD />,
        document.getElementById('app-root')
    );
});
