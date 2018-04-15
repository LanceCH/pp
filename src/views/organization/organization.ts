import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './organization.vue'

@Component({
    mixins: [Template]
})
export default class Organization extends Vue {

    input23 = ''
    tableData6 = []
}
