
import React from 'react'
import {Row,Col} from 'antd'
import './index.less'
import axios from '../../axios'
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
        this.getWeatherAPIData();
    }

    getWeatherAPIData(){
        let city = '北京';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0];
                console.log(data,123)
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather
                })
            }
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
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-tetail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
    }
}