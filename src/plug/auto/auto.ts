import Vue from 'util/vueExt'
import { State, Mutation, Getter, Action } from 'vuex-class'
import { Component, Prop, Watch } from 'vue-property-decorator'
import Template from './auto.vue'

@Component({
  mixins: [Template]
})
export default class Auto extends Vue {
  @Getter('staffId') staffId
  @Getter('autoLecNatioan') autoLecNatioan
  @Getter('autoLecControl') autoLecControl

  showStopPop = false

  miniPause() {
    if (this.autoLecControl.isPause) {
      this.$auto.start(this.staffId, this.autoLecNatioan.group, this.autoLecNatioan.gIndex, this.autoLecNatioan.nickIndexList, this.autoLecNatioan.autoList, this.autoLecNatioan.busyList)
    } else {
      this.$auto.pause()
    }
    this.$store.dispatch('GET_AUTO_PAUSE', !this.autoLecControl.isPause)
  }

  miniStop() {
    this.$store.dispatch('GET_AUTO_INDEX', 0)
    this.showStopPop = false
    this.$auto.stop()
  }
}
