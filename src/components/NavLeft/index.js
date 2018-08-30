import React from 'react'
import MentConfig from './'
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig'
// ./index.less 在const SubMenu = Menu.SubMenu 之前
import './index.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component{
    
    render(){
        function handleClick(e) {
            console.log('click', e);
          }
        return (
        <div>
            <div className="logo">
                <img src="/assets/logo-ant.svg" alt=""/>
                <h1>Imooc MS</h1>
            </div>
            <Menu theme="dark">
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
        )
    }
}