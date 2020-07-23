/**
 * Created by XM on 2018/9/3.
 * @email xm@tqzgc.com
 */
import React, { Component } from 'react';
import './index.scss'
export default class TravelRoute extends Component {
    constructor(props) {
        super(props);
        this.state = { area: [], value: '' };
        this.setMapRef = ref => {
            this.mapContainer = ref;
        };
        this.lon = '';
        this.lat = '';
    }

    componentDidMount() {
        this.lon = this.getQueryVariable('lon');
        this.lat = this.getQueryVariable('lat');
        this.createMapScript().then(this.initMap);
    }
    getQueryVariable = (variable) => {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i = 0; i < vars.length; i++) {
            let pair = vars[i].split("=");
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return (false);
    }

    getCurrent = () =>{
        return new Promise(resolve =>{
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition((r)=>{
                return resolve(r.point)
            });
        } )
    }

    initMap = async BMap => {
        let map = new BMap.Map(this.mapContainer);
        map.centerAndZoom(new BMap.Point(117.288234, 34.214721), 12);
        let driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true,}});
        let point = await this.getCurrent()
        console.log(this.lat)
        let end = new BMap.Point(this.lon, this.lat);
        console.log(end)
        let start = new BMap.Point(point.lng, point.lat);
        driving.search(start, end);

    };

    createMapScript = () => {
        const ak = 'CXS6PvbOPD5DlrV5xdolrG9V9uGyaCX3';
        window.BMap = window.BMap || {};
        if (Object.keys(window.BMap).length === 0) {
            window.BMap.b_preload = new Promise(resolve => {
                const $script = document.createElement('script');
                document.body.appendChild($script);
                window.b_initBMap = () => {
                    resolve(window.BMap);
                    document.body.removeChild($script);
                    window.BMap.b_preload = null;
                    window.b_initBMap = null;
                };

                $script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=b_initBMap`;
            });
            return window.BMap.b_preload;
        }

        if (!window.BMap.b_preload) {
            return Promise.resolve(window.BMap);
        }
        return window.BMap.b_preload;
    };


    render() {
        const { width = '100%', height = '100vh', style } = this.props;

        return (
            <div>
                <div>

                </div>
                <div  ref={this.setMapRef} style={{width,height}} />
            </div>
        );
    }
}
