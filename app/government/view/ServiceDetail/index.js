import React, {PureComponent} from 'react';
import './index.scss'
import cheng from '../../static/img/icon_chengxiangshebao.png'


export default class ServiceDetail extends PureComponent {
    render() {
        return <div>
            <div className='head' >
                <img className='icon' src={cheng}/>
                <div className='name'>
                    xxxx综合服务
                </div>
            </div>
            <div className='desc'>
                <div className='l'></div>
                <div className='desc-title'>服务信息</div>
                <div className='desc-body'>
                    asdasdasdasd
                </div>
            </div>
            <div className='desc'>
                <div className='l'></div>
                <div className='desc-title'>服务窗口</div>
                <div className='item'>5号窗口</div>
                <div className='item'>4号窗口</div>
                <div className='item'>3号窗口</div>
            </div>
        </div>
    }
}