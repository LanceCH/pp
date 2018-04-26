import Vue from 'util/vueExt'
import { Component, Watch } from 'vue-property-decorator'
import Template from './button-group.vue'

@Component({
    mixins: [Template]
})

export default class buttonGroup extends Vue {}