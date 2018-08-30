import React from 'react'
import Left from './Left'
import './index.less'
import { Button } from 'antd';
export default class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleAdd1(params) {
        this.setState({
            count:this.state.count+1
        })
    }
    handleAdd2 =()=>{
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        let style={
            color:"red"
        }
        return <div style={style}>
            <h1 className="text">react 生命周期介绍</h1>
            <Button onClick={this.handleAdd1.bind(this)}>点击一下+</Button>
            <button onClick={this.handleAdd2}>点击一下-</button>
            <p style={{fontSize:"60px"}}>{this.state.count}</p>
            <hr/>
            <Left name="lp"></Left>
        </div>
    }
}