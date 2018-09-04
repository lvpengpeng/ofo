import React from 'react'
import { Card,Table } from 'antd'
import axios from 'axios'
class BasicTable extends React.Component{
    state={
        data2:[]
    }

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
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
        let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        axios.get(baseApi+'/table/list').then((res)=>{
            if(res.status=='200'&&res.data.code==0){
                // console.log(JSON.stringify(res.data.result.list),234)
                this.setState({
                    data2:res.data.result.list
                })
            }
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
                dataIndex:'sex'
            },
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title:'兴趣',
                dataIndex:'interest'
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