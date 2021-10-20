import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Results } from './components/Results';
import { Search } from './components/Search';
import { Start } from './components/Start';
import { StepOne } from './components/StepOne';
import { StepThree } from './components/StepThree';
import { StepTwo } from './components/StepTwo';
import { StepZero } from './components/StepZero';
import { Success } from './components/Success';


function App() {
  const [state, setstate] = useState({})
  return (

    <Router>
        <Switch>
          <Route path="/step-zero" component={StepZero} />
          <Route path="/buscar-incidencia" component={()=><Search estado={state} cambio={setstate}/>}  />
          <Route path="/step-one" component={StepOne} />
          <Route path="/step-two" component={StepTwo} />
          <Route path="/success" component={Success} />
          <Route path="/step-three" component={StepThree} />
          <Route path="/resultado" component={()=><Results estado={state} cambio={setstate}/>} /> 
          <Route path="/" component={Start} />
        </Switch>
      </Router>
  );
}

export default App;
