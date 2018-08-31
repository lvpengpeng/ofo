
import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from'../../utils/utils'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            username:"lvpeng"
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            // 现在的系统时间=util里面的工具方法传入的时间戳返回
            this.setState({
                sysTime
            })
        },1000)
    }
    render(){
        return <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎，{this.state.username}</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-tetail">请转多云</span>
                    </Col>
                </Row>
            </div>
    }
}