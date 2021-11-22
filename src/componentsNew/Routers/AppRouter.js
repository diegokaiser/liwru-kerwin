import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { GetState }     from '../GetState';
import { Results }      from '../Results';
import { Start }        from '../Start';
import { StepZero }     from '../steps/StepZero';
import { StepOne }      from '../steps/StepOne';
import { StepTwo }      from '../steps/StepTwo';
import { StepThree }    from '../steps/StepThree';
import { Success }      from '../../components/Success';


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/buscar-incidencia" component={GetState}  />
                <Route path="/step-zero" component={StepZero} />
                <Route path="/step-one" component={StepOne} />
                <Route path="/step-two" component={StepTwo} />
                <Route path="/success" component={Success} />
                <Route path="/step-three" component={StepThree} /> 
                <Route path="/resultado" component={Results} />  
                <Route path="/" component={Start} />
            </Switch>
        </Router>
    )
}
