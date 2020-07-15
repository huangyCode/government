import Loadable from "react-loadable";
import React from 'react';

const serviceList = Loadable({
    loader: () => import(/* webpackChunkName: "serviceList" */'./view/serviceList'),
    loading(){
        return (
            <div>

            </div>
        )
    },
});


export default {
    serviceList,
};
