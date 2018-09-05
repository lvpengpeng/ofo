import React from 'react'
import { Card,Table ,Modal,Button,message} from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils.js'
class BasicTable extends React.Component{
    state={
        data:[]
    }
    params={
        page:1
    }
    componentDidMount(){
        this.request()
    }

    request = ()=>{
        let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading : true
            }
        }).then((res)=>{
            if(res.code == 0){
                res.result.list.map((item,index)=>{
                    item.key=index //表格数据添加key，不然会警告
                })
                this.setState({
                    data:res.result.list,
                    pagination:Utils.pagination(res,(current)=>{
                        // todo
                        _this.params.page = current;
                        this.request();
                    })
                }
            )}
        })
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                width:80
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                width:80
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex==1?"男":"女"
                },
                width:80
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
                },
                width:120
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
                },
                width:80
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width:80
            },
            {
                title:'地址',
                dataIndex:'address',
                width:120
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            }
        ]
        return(
            <div>
                <Card title="头部固定" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={true} // pagination 控制分页的
                        scroll={{y:240}} //表头固定 1.第一步设置表单内容高度，其中表头不会和表单内容对齐所以手动控制表头的宽度。
                    />
                </Card>
                <Card title="左侧固定" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns}
                        dataSource={this.state.data}
                        pagination={false} // pagination 控制分页的
                    />
                </Card>
            </div>
        )
    }
}
export default BasicTable