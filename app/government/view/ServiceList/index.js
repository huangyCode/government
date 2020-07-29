import React, {PureComponent} from 'react';
import './index.scss'
import goImg from '../../static/img/icon_go@2x.png'
import * as config from '../../../../config';
import api from '../../api'

export default class ServiceList extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }


    link=(i,w)=>{
        window.location.href  = `${document.location.protocol}//${document.location.host}${config.routerPath[config.currentApp]}/serviceDetail.html?i=${i}&w=${w}`;

    }

    componentDidMount() {
        this.fetchList()
    }

    fetchList = async () =>{
        let res = await api.serviceList();
        this.setState({list:res.data || []})
    }

    render() {
        let {list} = this.state

        return <div>
            {list && list.length && list.map((value,i) => {
                return <div key={i + 'g' }>
                    <div className='title'>
                        {value.office}
                    </div>
                    <div className='group-body'>
                        {value.windows && value.windows.length && value.windows.map((item,index) => {
                            return <div className={'item' + (index !==(value.windows.length-1) ? ' bline' : '' )}
                                        onClick={()=>this.link(i,index)}
                                        key={index + 'i'}>
                                <div className='item-text'>
                                    {item.name}
                                </div>
                                <img className='item-icon' src={goImg} />
                            </div>
                        })}
                    </div>
                </div>
            }) || null}
        </div>
    }
}