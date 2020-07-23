import React, {PureComponent} from 'react';
import './index.scss'
import wins from '../../static/img/window.png'
import listJson from '../../listJson'


export default class ServiceDetail extends PureComponent {
    constructor(props) {
        document.title = '我的奖品';
        super(props);
        this.state = {
            detail: {}
        };
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

    componentDidMount() {
        let i = this.getQueryVariable('i');
        let w = this.getQueryVariable('w');
        console.log(i+","+w)
        let detail = listJson[i] && listJson[i].windows && listJson[i].windows[w] || {};
        console.log(detail)
        this.setState({detail})
    }

    render() {
        let {detail} = this.state
        return <div>
            <div className='head'>
                <img className='icon'  src={wins}/>
                <div className='name'>
                    {detail.name}
                </div>
            </div>
            <div className='desc'>
                <div className='l'></div>
                <div className='desc-title'>服务信息</div>
                <div className='desc-body'>
                    <div className='mt'>服务业务：{detail.business}</div>
                    <div>联系电话：{detail.phone && detail.phone.length && detail.phone.map((value,index)=>{
                        return <span>{value + (index !== (detail.phone.length - 1) ? ', ' : '')}</span>
                    })}</div>
                </div>
            </div>
            <div className='desc'>
                <div className='l'></div>
                <div className='desc-title'>服务窗口</div>
                {detail.number && detail.number.length && detail.number.map((value)=>{
                    return <div className='item'>{value}号窗口</div>
                })}
            </div>
        </div>
    }
}