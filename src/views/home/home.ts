import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import * as Template from './home.vue'

@Component({
    mixins: [Template]
})
export default class Home extends Vue {

}
