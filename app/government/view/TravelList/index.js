import React, {PureComponent} from 'react';
import './index.scss'
import p from '../../static/img/WechatIMG1399.png'
import travelJson from '../../travelJson.js'
import local from '../../static/img/local@2x.png'
import * as config from "../../../../config";
export default class TravelList extends PureComponent {
    goRoute = (value) =>{
        window.location.href  = `${document.location.protocol}//${document.location.host}${config.routerPath[config.currentApp]}/travelRoute.html?lon=${value.lon}&lat=${value.lat}`;
    }

    render() {
        let list = travelJson;
        return <div>
            {list && list.length && list.map(
                (value,index) => <div key={index} className='group' onClick={()=>this.goRoute(value)}>
                    <div>
                        <div className='group-title'>{value.name}</div>
                        <div className='group-address'>
                            <img className='icon' src={local}/>
                            <div className='address'>{value.address}</div>
                        </div>
                    </div>
                    <img className='img' src={value.url || p}/>
                </div>
            )}
        </div>
    }
}