
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home  from '../../paginas/Home/';
import Contato from '../../paginas/Contato/'







const Rotas =  () =>(

    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={ Home}/>
        <Route path ="/contato" component = {Contato}/>
        



    </Switch>
    
    
    </BrowserRouter>

)

export default  Rotas;