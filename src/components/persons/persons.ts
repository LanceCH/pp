import Vue from 'util/vueExt'
import { Component, Watch } from 'vue-property-decorator'
import Template from './persons.vue'

@Component({
    mixins: [Template]
})

export default class Persons extends Vue {}