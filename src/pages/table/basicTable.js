import React from 'react'
import { Card,Table } from 'antd'
import axios from './../../axios/index'
class BasicTable extends React.Component{
    state={
        data2:[]
    }

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'2',
                state:'4',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '2',
                interest: '2',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '3',
                interest: '3',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            }
        ]
        this.setState({
            data
        })
        this.request()
    }

    request = ()=>{
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                },
                isShowLoading : true
            }
        }).then((res)=>{
            if(res.code == 0){
                this.setState({
                        data2:res.result.list
                }
            )}
        })
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex==1?"男":"女"
                }
            },
            {
                title: '状态',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title:'兴趣',
                dataIndex:'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title: '时间',
                dataIndex: 'time'
            }
        ]
        return(
            <div>
                <Card title="基础表格">
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={false} // pagination 控制分页的
                    />
                </Card>

                <Card title="动态表格">
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data2}
                        pagination={false} // pagination 控制分页的
                    />
                </Card>
            </div>
        )
    }
}
export default BasicTable