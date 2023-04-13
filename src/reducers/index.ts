import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import languageReducer from './languageReducer';
import articleCountReducer from './articleCountReducer';

const rootReducer = combineReducers({
  view: viewReducer,
  language: languageReducer,
  articleCount: articleCountReducer
});

export default rootReducer;
