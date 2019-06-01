import React, { useEffect } from 'react';
import { StaticBanner } from 'material-ui-banner';


export default () => {
    useEffect(() => {
        StaticBanner.show({
            icon: <div style={{ backgroundColor: 'red', width: '100%', height: '500px' }} />,
            label: 'This is an example of a static banner with one line of text.',
        });
    }, []);

    return null;
};
