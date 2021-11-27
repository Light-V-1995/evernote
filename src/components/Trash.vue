<template>
  <div id="trash-detail">
    <h1>note : {{ $route.query.noteId }}</h1>
  </div>
</template>

<script>
import Auth from "../apis/auth"
export default {
    data(){
        return {

        }
    },
    created () {
        Auth.getInfo().then(res=>{
            if(!res.isLogin){
                this.$router.push({name:"login"})
            }
        })
    }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>