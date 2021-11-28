<template>
  <div id="note" class="detail">
    <note-sidebar @update:notes="val => notes = val"></note-sidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{curNote.createdAtFriendly}} </span>
          <span> 更新日期: {{curNote.updatedAtFriendly}} </span>
          <span>{{statusText}}</span>
          <span class="iconfont icon-delete" @click="deleteNote"></span>
          <span class="iconfont icon-fullscreen" @click="isShowPreview = !isShowPreview"></span>
        </div>
        <div class="note-title">
          <input type="text" v-model="curNote.title" @input="updateNote" @keydown="statusText = '正在输入...'" placeholder="输入标题">
        </div>
        <div class="editor">
          <textarea v-show="!isShowPreview" v-model="curNote.content" @input="updateNote" @keydown="statusText = '正在输入...'" placeholder="输入内容, 支持 markdown 语法"></textarea>
          <div class="preview markdown-body" v-html="previewContent" v-show="isShowPreview">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../apis/auth"
import NoteSidebar from "../components/NoteSidebar.vue"
import Bus from "../helpers/bus"
import _ from "lodash"
import Notes from "../apis/notes"
import MarkdownIt from "markdown-it"

let md = new MarkdownIt()


export default {
    components:{
      NoteSidebar
    },
    computed:{
      previewContent () {
        return md.render(this.curNote.content || '')
      }
    },
    data(){
        return {
          curNote:{},
          notes:[],
          statusText:'未改动',
          isShowPreview:false
        }
    },
    methods:{
      updateNote: _.debounce(function(){
        Notes.updateNote({ noteId : this.curNote.id },{ title : this.curNote.title , content : this.curNote.content })
        .then(() => {
          this.statusText = '已保存'
        }).catch(() => {
          this.statusText = '保存出错'
        })
      },300),
      deleteNote () {
        Notes.deleteNote({ noteId : this.curNote.id }).then(data => {
          this.$message.success(data.msg)
          this.notes.splice(this.notes.indexOf(this.curNote), 1)
          this.$router.replace({ path: '/note' })
        })
      }
    },
    created () {
        Auth.getInfo().then(res=>{
            if(!res.isLogin){
                this.$router.replace({name:"login"})
            }
        })
        Bus.$once('update:notes',val => {
          this.curNote = val.find(note => note.id == this.$route.query.noteId) || {}
        })
    },
    beforeRouteUpdate(to, from, next) {
      // console.log(to,from)
      this.curNote = this.notes.find (note => note.id == to.query.noteId) || {}
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