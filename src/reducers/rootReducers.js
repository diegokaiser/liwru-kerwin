import { combineReducers }      from 'redux';
import { checkReducer }         from './checkReducer';
import { idQueryReducer }       from './idQueryReducer';
import { incidenceReducer }     from './incidenceReducer';
import { formOne }              from './formOne';
import { formTwo }              from './formTwo';

export const rootReducers = combineReducers({
    idQuery: idQueryReducer,
    incidenceData: incidenceReducer,
    checkTerms: checkReducer,
    formOne,
    formTwo
})