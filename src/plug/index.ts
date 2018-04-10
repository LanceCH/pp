import * as api from '../util/api'
import { Message } from 'element-ui'

export default class Auto {
  $vm = null
  static install (Vue) {
    Vue.mixin({
      beforeCreate() {
        this.$auto = new Auto()
        this.$auto.$vm = this
      }
    })
  }

  // 开始
  start(staffId, gName, gIndex, nickIndexList, options, busyList) {
    this.$vm.$store.dispatch('GET_IS_LECTURE', true)
    const autoStoreInfo = {
      group: gName,
      gIndex: gIndex,
      nickIndexList: nickIndexList,
      autoList: options,
      busyList: busyList,
      percent: 0
    }
    const lecLoop = () => {
      if (this.$vm.$store.state.autoLexcIndex < options.length) {
        const ckContent = options[this.$vm.$store.state.autoLexcIndex].newContent
        if (ckContent.indexOf('<img src="//ss.yidejia.com') !== -1) {
          const url = 'https:' + ckContent.split('"')[1]
          const imgdata = {
            staff_id: staffId,
            url: url,
            toid: gName.wxid,
            wxid: options[this.$vm.$store.state.autoLexcIndex].new_wxid
          }
          // 加入实时聊天列表的消息内容
          const imgpkg = {
            staff_id: staffId,
            talkerName: options[this.$vm.$store.state.autoLexcIndex].new_wx_nickname,
            avatar: options[this.$vm.$store.state.autoLexcIndex].avatar,
            toID: gName.wxid,
            fromID: imgdata.wxid,
            type: 2,
            content: ckContent,
            newContent: ckContent,
            isNick: true,
            sendTime: new Date().getHours() + ':' + new Date().getMinutes()
          }
          api.sendImgMsg(imgdata).then(res => {
            const history = this.$vm.$store.state.roomChatHis
            history.map(v => {
              if (v.id === imgdata.toid) {
                const maxLen = v.msgList.length
                if (maxLen >= 100) {
                  v.msgList.shift()
                  v.msgList.push(imgpkg)
                } else {
                  v.msgList.push(imgpkg)
                }
              }
            })
            this.$vm.$store.dispatch('GET_ROOM_CHATHIS', history)
          })
        } else {
          const data = {
            staff_id: staffId,
            content: options[this.$vm.$store.state.autoLexcIndex].newContent,
            toid: gName.wxid,
            flag: 1,
            wxid: options[this.$vm.$store.state.autoLexcIndex].new_wxid
          }
          // 加入实时聊天列表的消息内容
          const mypkg = {
            staff_id: staffId,
            talkerName: options[this.$vm.$store.state.autoLexcIndex].new_wx_nickname,
            avatar: options[this.$vm.$store.state.autoLexcIndex].avatar,
            toID: gName.wxid,
            fromID: data.wxid,
            type: 1,
            content: parseEmoji(data.content.replace(/\n/g, '<br>')),
            newContent: parseEmoji(data.content.replace(/\n/g, '<br>')),
            isNick: true,
            sendTime: new Date().getHours() + ':' + new Date().getMinutes()
          }
          api.sendTextMsg(data).then(res => {
            const history = this.$vm.$store.state.roomChatHis
            history.map(v => {
              if (v.id === data.toid) {
                const maxLen = v.msgList.length
                if (maxLen >= 100) {
                  v.msgList.shift()
                  v.msgList.push(mypkg)
                } else {
                  v.msgList.push(mypkg)
                }
              }
            })
            this.$vm.$store.dispatch('GET_ROOM_CHATHIS', history)
          })
        }
        this.$vm.$store.dispatch('GET_AUTO_INDEX', this.$vm.$store.state.autoLexcIndex + 1)
        autoStoreInfo.percent = Math.floor((this.$vm.$store.state.autoLexcIndex / options.length) * 100)
        this.$vm.$store.dispatch('GET_AUTOLEC_INFO', autoStoreInfo)
      } else {
        clearTimeout(this.$vm.$store.state.autoTimer)
        this.$vm.$store.dispatch('GET_AUTO_INDEX', 0)
        autoStoreInfo.percent = Math.floor((this.$vm.$store.state.autoLexcIndex / options.length) * 100)
        this.$vm.$store.dispatch('GET_AUTOLEC_INFO', autoStoreInfo)
        // 解放讲课的小号
        const data = {
          staff_id: staffId,
          status: 1,
          wxid: this.$vm.$store.state.autoLecNatioan.busyList
        }
        api.setBusyStatus(data).then(res => {
          // this.$vm.autoStop()
          this.$vm.$store.dispatch('GET_AUTO_STOP', false)
          this.$vm.$store.dispatch('GET_AUTO_PAUSE', false)
          this.$vm.$store.dispatch('GET_IS_LECTURE', false)
        })
        return Message.success('自动讲课完毕！')
      }
      if (this.$vm.$store.state.autoLexcIndex >= options.length) {
        lecLoop()
      } else {
        const the_tmier = setTimeout(() => {
          lecLoop()
        }, Number(options[this.$vm.$store.state.autoLexcIndex].time_interval) * 1000)
        this.$vm.$store.dispatch('GET_AUTO_TIMER', the_tmier)
      }
    }
    lecLoop()
  }

  // 暂停
  pause() {
    clearTimeout(this.$vm.$store.state.autoTimer)
  }

  // 结束
  stop() {
    // 设置讲课小号为空闲状态
    const data = {
      staff_id: this.$vm.$store.state.userInfo.staff_id,
      status: 1,
      wxid: this.$vm.$store.state.autoLecNatioan.busyList
    }
    api.setBusyStatus(data).then(res => {
      clearTimeout(this.$vm.$store.state.autoTimer) // 清除定时器
      this.$vm.$store.dispatch('GET_AUTO_INDEX', 0) // 初始化下标值
      this.$vm.$store.dispatch('GET_AUTO_PAUSE', false) // 初始化暂停状态
      this.$vm.$store.dispatch('GET_AUTO_STOP', false) // 初始化停止状态
      this.$vm.$store.dispatch('GET_IS_LECTURE', false)
      Message.success('结束自动讲课')
    })
  }
}
