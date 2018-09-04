import React from 'react'
import { Card,Table ,Modal} from 'antd'
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

        data.map((item,index)=>{
            item.key=index //表格数据添加key，不然会警告
        })


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
                res.result.list.map((item,index)=>{
                    item.key=index //表格数据添加key，不然会警告
                })
                this.setState({
                    data2:res.result.list
                }
            )}
        })
    }
    onRowclick=(record,index)=>{
        let selectKey = [index];
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
        Modal.info({
            title:'确认？',
            content:`用户名是${record.userName} ,兴趣是${record.interest}`
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
        const {selectedRowKeys} =this.state
        const rowSelection={
            type:"radio",
            selectedRowKeys
        }
        return(
            <div>
                <Card title="基础表格" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={false} // pagination 控制分页的
                    />
                </Card>

                <Card title="动态表格" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data2}
                        pagination={false} // pagination 控制分页的
                    />
                </Card>

                <Card title="Mock-单选" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data2}
                        pagination={false} // pagination 控制分页的
                        rowSelection={rowSelection}

                        // 添加点击一行事件
                        onRow={(record,index) => {
                            return {

                                onClick: () => {
                                    this.onRowclick(record,index)
                                }       // 点击行
                            //   onMouseEnter: () => {},  // 鼠标移入行
                            //   onXxxx...
                            };
                          }}
                    />
                </Card>
            </div>
        )
    }
}
export default BasicTable