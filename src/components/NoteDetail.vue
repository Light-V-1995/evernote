<template>
  <div id="note" class="detail">
    <note-sidebar></note-sidebar>
    <div class="note-detail">
      <div class="note-empty" v-show="!curNote.id">请选择笔记</div>
      <div class="note-detail-ct" v-show="curNote.id">
        <div class="note-bar">
          <span> 创建日期: {{curNote.createdAtFriendly}} </span>
          <span> 更新日期: {{curNote.updatedAtFriendly}} </span>
          <span>{{statusText}}</span>
          <span class="iconfont icon-delete" @click="onDeleteNote"></span>
          <span class="iconfont icon-fullscreen" @click="isShowPreview = !isShowPreview"></span>
        </div>
        <div class="note-title">
          <input type="text" v-model="curNote.title" @input="onUpdateNote" @keydown="statusText = '正在输入...'" placeholder="输入标题">
        </div>
        <div class="editor">
          <textarea v-show="!isShowPreview" v-model="curNote.content" @input="onUpdateNote" @keydown="statusText = '正在输入...'" placeholder="输入内容, 支持 markdown 语法"></textarea>
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
import _ from "lodash"
import MarkdownIt from "markdown-it"
import { mapActions, mapGetters } from 'vuex'

let md = new MarkdownIt()


export default {
    components:{
      NoteSidebar
    },
    computed:{
      previewContent () {
        return md.render(this.curNote.content || '')
      },
      ...mapGetters(['curNote', 'notes'])
    },
    created () {
        Auth.getInfo().then(res=>{
            if(!res.isLogin){
                this.$router.replace({name:"login"})
            }
        })
    },
    data(){
        return {
          statusText:'未改动',
          isShowPreview:false
        }
    },
    methods:{
      ...mapActions(['updateNote','deleteNote']),
      onUpdateNote: _.debounce(function(){
        this.updateNote({ noteId : this.curNote.id },{ title : this.curNote.title , content : this.curNote.content })
        .then(() => {
          this.statusText = '已保存'
        }).catch(() => {
          this.statusText = '保存出错'
        })
        console.log(this.curNote)
      },300),
      onDeleteNote () {
        this.deleteNote({ noteId : this.curNote.id }).then(() => {
          this.$router.replace({ path:'/note' })
        })
      },
      beforeRouteUpdate(to, from, next) {
        // console.log(to,from)
        this.$store.commit('setCurNote',{ curNoteId: to.query.noteId })
        console.log('111')
        next()
      },
    }
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