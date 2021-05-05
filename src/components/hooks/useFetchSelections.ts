import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { db } from '../../firebase/config';

function useFetchSelections(query: string) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	const { user } = useSelector((state: RootState) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!query || !user) return;

		const unsubscribe = db
			.collection('users')
			.doc(`${user?.id}`)
			.onSnapshot(snapshot => {
				const data = snapshot.data();
				setData(data ? data[`${query}`] : []);
				setLoading(false);
			});

		return unsubscribe;
	}, [query]);

	return { loading, data, error };
}

export default useFetchSelections;
