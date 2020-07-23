import React from 'react';
import {render} from 'react-dom';
import config from '../config/index';

import {BrowserRouter, Route, Switch, hashHistory, browserHistory} from 'react-router-dom';

const router = require('./' + config.currentApp +'/router');

const routers = () => {
    let arr = [];
    Object.keys(router).forEach((key,index)=> {
        let path = ''
        if(config.routerPath[config.currentApp]){
            path = config.routerPath[config.currentApp] + '/'+key+'.html'
        }else{
            path = '/'+key+'.html'
        }
        if(index === 0){
            arr.push(<Route key={index} exact path={path} component={router[key]}/>)
        }else{
            arr.push(<Route key={index} path={path} component={ router[key]}/>)
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