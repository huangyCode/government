import React from 'react';
import {render} from 'react-dom';
import config from '../config/index';

import {BrowserRouter, Route, Switch, hashHistory, browserHistory} from 'react-router-dom';

const router = require('./' + config.currentApp +'/router');

const routers = () => {
    let arr = [];
    Object.keys(router).forEach((key,index)=> {
        if(index === 0){
            arr.push(<Route key={index} exact path={config.routerPath[config.currentApp] + '/'+key+'.html'} component={router[key]}/>)
        }else{
            arr.push(<Route key={index} path={config.routerPath[config.currentApp] + '/'+key+'.html'} component={ router[key]}/>)
        }
    })
    return arr;
}

const SliderComponent = () => (
    <Switch>
        {routers()}
    </Switch>
);
render(
    <BrowserRouter history={browserHistory}>
        <Switch>
            <SliderComponent/>
        </Switch>
    </BrowserRouter>,
    document.querySelector("#root")
);