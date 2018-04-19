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

  handleDragStart(node, ev) {
    //  console.log('drag start', node)
    //  console.log(node.isLeaf)
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
  }
  allowDrop(draggingNode, dropNode) {
    console.log(dropNode)
    return (
      dropNode.isLeaf === draggingNode.isLeaf &&
      dropNode.level === draggingNode.level &&
      dropNode.level! === 1
    )
  }
  allowDrag(draggingNode) {
    return draggingNode.data.label.indexOf('三级 3-1-1') === -1
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
