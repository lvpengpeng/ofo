import React from 'react'
import MentConfig from './'
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
// ./index.less 在const SubMenu = Menu.SubMenu 之前
import './index.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)

        this.setState({
            menuTreeNode
        })
    }

    // renderMenu菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                ) 
            }
            return <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item >    
        })
    }
    render(){
        return (
        <div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark">
                {this.state.menuTreeNode}
            </Menu>
        </div>
        )
    }
}