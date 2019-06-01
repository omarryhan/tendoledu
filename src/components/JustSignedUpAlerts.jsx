import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAlert } from 'react-alert';


/* eslint-disable react-hooks/exhaustive-deps */
const JustSignedUpAlerts = ({ alertDefinitions }) => {
    const alert = useAlert();
    useEffect(() => {
        alertDefinitions.forEach(({ message, waitTime, alertTime }) => {
            setTimeout(
                () => alert.success(message, { timeout: alertTime }),
                waitTime,
            );
        });
    },
    []);
    return null;
};

JustSignedUpAlerts.propTypes = {
    alertDefinitions: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string.isRequired,
        waitTime: PropTypes.number.isRequired,
        alertTime: PropTypes.number.isRequired,
    })).isRequired,
};

export default JustSignedUpAlerts;
