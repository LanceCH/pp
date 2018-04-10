import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Template from './appHeader.vue'

@Component({
  mixins: [Template]
})
export default class AppHeader extends Vue {
  @Getter('staffId') staffId
  staffInfo = {
    avatar_url: '',
    allow_api_ids: []
  }
  isDefault = true
  isManager = false
  isSuperManager = false
  isDoing = true

  mounted () {
    if (this.$route.name === 'SystemUpdate' || this.$route.name === 'By404') {
      this.isDoing = false
    }

    this.staffInfo = this.$store.state.userInfo
    if (this.staffInfo.avatar_url.length > 0) {
      this.isDefault = false
    }

    this.staffInfo.allow_api_ids.forEach(v => {
      if (Number(v) === 206) {
        this.isManager = true
      }
      if (Number(v) === 101) {
        this.isSuperManager = true
      }
    })
  }

  toHomeHandle() {
    if (this.$route.name === 'SystemUpdate' || this.$route.name === 'By404') {
      this.isDoing = false
      return false
    } else {
      location.href = '#/'
    }
  }

  layout () {
    this.$auto.stop()
    this.api.layout({
      staff_id: this.staffId
    }).then(res => {
      this.$message({
        message: '账号退出成功!',
        type: 'success'
      })
      this.$cookie.delete('token')
      localStorage.removeItem('staffInfo')
      setTimeout(() => {
        location.href = '#/login'
        localStorage.removeItem('useExport')
      }, 1000)
      localStorage.removeItem('navdata')
      localStorage.removeItem('bindLecturer')
    })
  }
}
