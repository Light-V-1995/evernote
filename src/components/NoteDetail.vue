<template>
  <div id="note" class="detail">
    <note-sidebar @update:notes='val=>nodes=val'></note-sidebar>
    <div class="note-detail">
        <div class="note-bar">
          <span> 创建日期: {{curNote.createdAtFriendly}} </span>
          <span> 更新日期: {{curNote.updatedAtFriendly}} </span>
          <span>{{curNote.statusText}}</span>
          <span class="iconfont icon-delete" ></span>
          <span class="iconfont icon-fullscreen"></span>
        </div>
        <div class="note-title">
          <input type="text" v-model="curNote.title" placeholder="输入标题">
        </div>
        <div class="editor">
          <textarea v-show="true" v-model="curNote.content" placeholder="输入内容, 支持 markdown 语法"></textarea>
          <div class="preview markdown-body" v-show="false">
          </div>
        </div>
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
          curNote:{},
          nodes:[]
        }
    },
    created () {
        Auth.getInfo().then(res=>{
            if(!res.isLogin){
                this.$router.replace({name:"login"})
            }
        })
    },
    beforeRouteUpdate(to, from, next) {
      // console.log(to,from)
      this.curNote = this.nodes.find (note => note.id == to.query.noteId)
      next()
    },
}
</script>

<style lang="less">
@import url(../assets/css/note-detail.less);

#note {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}

</style>