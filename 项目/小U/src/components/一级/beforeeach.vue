<template>
    <div>
        <form action="#">
            账号<input type="text" v-model="conts.tel">
            密码<input type="password" v-model="conts.pass">
            <button @click="qued">登录</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
               conts:
                {
                    tel:'',
                    pass:''
                },
        }
    },
       methods:{
                qued(){
                    if(this.conts.tel==''||this.conts.pass==''){
                        alert('不能为空')
                    }else{
                        alert('登录成功')
                        
                        // localStorage.setItem("stuInfo", JSON.stringify(this.studentInfo));
                    }
                }
            }
}
</script>

<style lang="" scoped>
    
</style>