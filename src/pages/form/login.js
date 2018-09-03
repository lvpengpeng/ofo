import React from 'react'
import { Card, Form ,Input,Button} from 'antd'

const FormItem = Form.Item;
// 通过Form组件的item属性，可拿到FromItem子项。
class FormLogin extends React.Component{
    render(){
        return(
                <div>
                    <Card title="登录行内表单">
                        <Form layout="inline">
                            <FormItem>
                                    <Input placeholder="请输入用户名"/>
                            </FormItem>
                            <FormItem>
                                    <Input placeholder="请输入密码"/>
                            </FormItem>
                            <FormItem>
                                    <Button type="prinary">登录</Button>
                            </FormItem>
                        </Form>
                    </Card>
                </div>
        )
    }
}
export default FormLogin

