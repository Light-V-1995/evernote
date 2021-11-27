<template>
  <div id="note" class="detail">
    <note-sidebar></note-sidebar>
  <div id="note-detail">
    <h1>notebookId : {{ $route.query.notebookId }}</h1>
    <h1>noteId : {{ $route.query.noteId }}</h1>
  </div>
  </div>
</template>

<script>
import Auth from "../apis/auth"
import NoteSidebar from "../components/NoteSidebar.vue"
export default {
  components:{
    NoteSidebar
  },
    data(){
        return {

        }
    },
    created () {
        Auth.getInfo().then(res=>{
            if(!res.isLogin){
                this.$router.replace({name:"login"})
            }
        })
    }
}
</script>

<style scoped>
#note {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>