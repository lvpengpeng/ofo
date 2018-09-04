export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    },

    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page, //当前第几页
            pageSize:data.result.page_size, // 每页条数
            total: data.result.total_count, // 总共条数
            showTotal:()=>{
                return `共${data.result.total_count}条` //
            },
            showQuickJumper:true //是否可以快速跳的某页
        }
    }
}