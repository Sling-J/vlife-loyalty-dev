import { createStore, Store, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from '../rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../rootSaga'
import { loadState, saveState } from './persistStore'

const persistedState = loadState()
const sagaMiddleware = createSagaMiddleware()

export const store: Store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  saveState({
    // Пример добавления редьюсера в persist
    // status: store.getState().status,
  })
})
