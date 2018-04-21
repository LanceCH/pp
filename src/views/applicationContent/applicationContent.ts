import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './applicationContent.vue'

import { AppDetailGetter } from 'store/bindHelpers'

@Component({
  mixins: [Template]
})
export default class ApplicationContent extends Vue {
  @AppDetailGetter('getAppDetail') getAppDetail: { title: string; id: number }

  navData = []

  defaultProps = {
    children: 'children',
    label: 'label'
  }

  dragLevel: number = null // 拖动对象等级
  dragParent = null

  handleDragStart(node, ev) {
    //  console.log('drag start', node)
    this.dragLevel = node.level
    console.log(node)
  }
  handleDragEnter(draggingNode, dropNode, ev) {
    // console.log('tree drag enter: ', dropNode.label)
  }
  handleDragLeave(draggingNode, dropNode, ev) {
    // console.log('tree drag leave: ', dropNode.label)
  }
  handleDragOver(draggingNode, dropNode, ev) {
    // console.log('tree drag over: ', dropNode.label)
  }
  handleDragEnd(draggingNode, dropNode, dropType, ev) {
    // console.log('tree drag end: ', dropNode && dropNode.label, dropType)
  }
  handleDrop(draggingNode, dropNode, dropType, ev) {
    // console.log('tree drop: ', dropNode.label, dropType)
    console.log(dropNode.level)
  }
  allowDrop(draggingNode, dropNode) {
    console.log(dropNode)
   // console.log(dropNode.level, dropNode.level)
   console.log(dropNode.level, dropNode.level)
   if (this.dragLevel === 1) {
    // 一级
      return dropNode.level !== 2
   } else {
    // 二级
      return dropNode.level !== 1
   }
  }

  mounted() {
    this.getTree()
  }

  /**
   * 获取树
   */
  getTree() {
    this.api.getTree({}).then(res => {
      console.log(res)
      this.navData = res.data
    })
  }
}
