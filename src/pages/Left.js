import React from 'react'

export default class List extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    state={
        text:"子组件的生命周期"
    }
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps",newProps.name)
    }
    shouldComponentUpdate(){
// 有setState就会调用“shouldComponentUpdate”
        console.log("shouldComponentUpdate")
        return true
        // 默认return true  ， 如果return之后的生命周期就不走了
    }
    componentWillUpdate(){
        console.log(" componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        console.log("render")
        return <div>
            <h1>{this.state.text}</h1>
            {/* <P>{this.props.name}</P> */}
        </div>
    }
}