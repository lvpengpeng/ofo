import React from 'react'
import { Card,Table ,Modal,Button,messag , Badge,message} from 'antd'
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
            url:'/table/high/list',
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

    handleChange = (pagination, filters, sorter)=>{
        console.log("::" + sorter)
        this.setState({
            sortOrder:sorter.order
        })
    }
    // 删除操作
    handleDelete = (item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
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
                dataIndex: 'username',
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


        const columns2 = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },
            {
                title: '用户名',
                dataIndex: 'username',
                width:80,
                fixed:'left'
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
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            },
            {
                title: '时间',
                dataIndex: 'time',
                width:80
            },
            {
                title: '生日',
                dataIndex: 'birthday',
                width:80,
                fixed:'right'
            }
        ]

        const columns3 = [
            {
                title:'id',
                dataIndex:'id',
                width:80
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex==1?"男":"女"
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
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
                dataIndex: 'birthday',
            },
            {
                title:'地址',
                dataIndex:'address',
            },
            {
                title: '时间',
                dataIndex: 'time',
            }
        ]

        const columns4 = [
            {
                title:'id',
                dataIndex:'id',
                width:80
            },
            {
                title: '用户名',
                dataIndex: 'username',
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
                        '1': <Badge status="success" text="成功"/>,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />
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
                width:180
            },
            {
                title:'地址',
                dataIndex:'address',
                width:120
            },
            {
                title: '操作',
                //  这样调用render 里面的this有问题
                // render(text,item){
                //     return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                // },

                // 所以使用箭头函数
                // render:(text,item) 里面肯定有这两个参数，可以通过item拿到这行所以的内容
                render:(text,item)=>{
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                },
                width:120
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
                        columns={columns2}
                        dataSource={this.state.data}
                        pagination={false} // pagination 控制分页的
                        scroll={{x:1210}} //2.1通过计算表头的总共宽度是1200，这个scroll宽度要设的比1200宽点即可实现内容的左右滑动。
                    />
                </Card>

                 <Card title="排序" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns3}
                        dataSource={this.state.data}
                        pagination={false} // pagination 控制分页的
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{marginTop:"20px"}}>
                    <Table 
                        bordered // 控制外边框线显示的
                        columns={columns4}
                        dataSource={this.state.data}
                        pagination={true} // pagination 控制分页的
                    />
                </Card>
            </div>
        )
    }
}
export default BasicTable