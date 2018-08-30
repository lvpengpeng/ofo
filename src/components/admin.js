import React from 'react'
// 项目结构的构建
import {Row,Col} from 'antd'
import Header from './components/header'
import Footer from './components/footer'
export default class Admin extends React.Component{
    render(){
        return (
            <Row>   
                <Col span="3">2</Col>
                <Col span="21">
                    <Header></Header>
                    <Row>content</Row>
                    <Footer></Footer>
                </Col>
            </Row>  
        )
    }
}