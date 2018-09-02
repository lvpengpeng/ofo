import React from 'react';
import {Modal, Card,Button} from 'antd'
import './ui.less'
export default class Modals extends React.Component{
    state={
        showModal1:false
    }
    handleOpen=(type)=>{
        this.setState({
            // type:true  type:当成key
            [type]:true  
            // [type]当成变量
        })
    }
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                                           {/* this.handleOpen('showModal1') 会自动执行，如果传参，就必须用箭头函数 */}
                    <Button type="primary" onClick={() =>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() =>this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
                <Modal
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>欢迎学习慕课新推出的React高级课程</p>
                </Modal>
            </div>
        )
    }
}