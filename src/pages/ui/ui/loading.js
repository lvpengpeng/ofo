import React from 'react';
import {Card,Spin,Icon,Alert} from 'antd'
import './ui.less'
export default class Loadings extends React.Component{
    render(){
        const icon = <Icon  type="loading" style={{fontSize:24}}/>
        return(
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin style={{margin:'0 20px'}}/>
                    {/* margin:'0 20px' 数值是字符串 必须写单位 */}
                    <Spin size="large"/>
                    <Spin indicator={icon} style={{ marginLeft: 10 }} spinning={true}/>
                    {/* indicator 替换的是静态图片 ，不能旋转 ，除非换成gif动图 */}
                    {/* marginLeft: 10   一个数字，可不写单位 */}
                </Card>
            </div>
        )
    }
}