import React from 'react'
// 项目结构的构建
import {Row,Col} from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import NavLeft from './components/navLeft'
export default class Admin extends React.Component{
    render(){
        return (
            <Row>   
                <Col span="4">
                    <NavLeft/>
                </Col>
                <Col span="21">
                    <Header/>
                    <Row>content</Row>
                    <Footer/>
                </Col>
            </Row>  
        )
    }
}