import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { db } from '../../firebase/config';

function useFetchSelections(query: string) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	const { user } = useSelector((state: RootState) => state.auth);

	useEffect(() => {
		if (!query || !user) return;

		const unsubscribe = db
			.collection('users')
			.doc(`${user?.id}`)
			.onSnapshot(snapshot => {
				try {
					const data = snapshot.data();
					setData(data ? data[`${query}`] : []);
					setLoading(false);
				} catch (e) {
					console.log(e);
				}
			});

		return unsubscribe;
	}, [query]);

	return { loading, data };
}

export default useFetchSelections;
