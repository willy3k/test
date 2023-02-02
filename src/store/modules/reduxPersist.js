import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistdReducer = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'], // isso e o que eu quero salvaar
    },
    reducers
  );

  return persistdReducer;
};
