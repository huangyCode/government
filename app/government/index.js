import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise'
import 'core-js/es6/object'
import 'whatwg-fetch'

import React from 'react';
import {render} from 'react-dom';
import config from '../../config';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import router from './router';


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
    <BrowserRouter>
        <SliderComponent/>
    </BrowserRouter>,
    document.querySelector("#root")
);