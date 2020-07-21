import Loadable from "react-loadable";
import React from 'react';

const serviceList = Loadable({
    loader: () => import(/* webpackChunkName: "serviceList" */'./view/ServiceList'),
    loading(){
        return (
            <div>
            </div>
        )
    },
});

const serviceDetail = Loadable({
    loader: () => import(/* webpackChunkName: "serviceDetail" */'./view/ServiceDetail'),
    loading(){
        return (
            <div>
            </div>
        )
    },
});

const travelRoute = Loadable({
    loader: () => import(/* webpackChunkName: "travelRoute" */'./view/TravelRoute'),
    loading(){
        return (
            <div>
            </div>
        )
    },
});

const travelList = Loadable({
    loader: () => import(/* webpackChunkName: "travelList" */'./view/TravelList'),
    loading(){
        return (
            <div>
            </div>
        )
    },
});



export default {
    serviceList,
    serviceDetail,
    travelRoute,
    travelList
};
