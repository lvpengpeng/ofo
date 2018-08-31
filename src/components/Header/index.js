
import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            username:"lvpeng"
        })
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
                        <span className="date">2018-05-06</span>
                        <span className="weather-tetail">请转多云</span>
                    </Col>
                </Row>
            </div>
    }
}