import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './applicationContent.vue'

import { AppDetailGetter } from 'store/bindHelpers'

@Component({
  mixins: [Template]
})
export default class ApplicationContent extends Vue {
  @AppDetailGetter('getAppDetail') getAppDetail: { title: string; id: number }
}
