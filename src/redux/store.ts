import { applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools} from 'redux-devtools-extension';

const middleware = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
