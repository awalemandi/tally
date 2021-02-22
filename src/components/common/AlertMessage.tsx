import React from 'react';
import Alert from '@material-ui/lab/Alert';

const AlertMessage = (
	type: 'success' | 'info' | 'warning' | 'error',
	message: string
) => {
	return <Alert severity={type}>{message}</Alert>;
};

export default AlertMessage;
