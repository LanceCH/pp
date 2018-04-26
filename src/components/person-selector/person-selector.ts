import Vue from 'util/vueExt'
import { Component, Watch } from 'vue-property-decorator'
import Template from './person-selector.vue'

@Component({
    mixins: [Template]
})

export default class PersonSelector extends Vue {
    openPop () {
        this.$refs.multiplePersonPop.show()
    }
}
