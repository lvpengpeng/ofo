import jsonP from 'jsonp'
import { Modal } from 'antd'
import axios from 'axios'
export default class Axios{
    static jsonp(options){
    return new Promise((resolve,reject)=>{
            jsonP(options.url,{
                param:'callback'
            },function(err,response){
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options){
        let baseApi = 'https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api';
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:50000,
                params:(options.data&&options.data.params)||""
            }).then((response)=>{
                if(response.status =='200'){ //200 服务器相应200
                    let res = response.data;
                    // console.log(response.data)
                    if(res.code==0){ //自定义成功状态码是0
                        resolve(res);
                    }else{
                        Modal.info({
                            title:"提示",
                            contant:res.msg
                        })
                    }
                }
            })
        })
        axios.get(baseApi+'/table/list').then((res)=>{
            if(res.status=='200'&&res.data.code==0){
                // console.log(JSON.stringify(res.data.result.list),234)
                this.setState({
                    data2:res.data.result.list
                })
            }
        })
    }
}