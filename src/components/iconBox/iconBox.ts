import Vue from 'util/vueExt'
import { Component, Prop, Watch} from 'vue-property-decorator'
import Template from './iconBox.vue'

@Component({
    mixins: [Template]
})
export default class IconBox extends Vue {
  @Prop({ required: true }) iconList: string[]
  @Prop({required: true}) selectIcon

  /**
   * 选择icon
   */
  select(v) {
    this.selectIcon(v)
  }
}
