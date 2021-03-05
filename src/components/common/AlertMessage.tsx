import React, { FC } from 'react';
import Alert from '@material-ui/lab/Alert';

interface AlertProps {
	type: 'success' | 'info' | 'warning' | 'error';
	message: string;
}
const AlertMessage: FC<AlertProps> = ({ type, message }) => {
	return <Alert severity={type}>{message}</Alert>;
};

export default AlertMessage;
