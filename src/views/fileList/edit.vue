<template>
    <div class="file-container">
        <el-form ref="form" :model="form" label-width="80px">
            <div class="line">
                <el-form-item label="HR准备事项">
                    <el-checkbox-group v-model="form.hr">
                    <el-checkbox label="待入职人员简历" name="type"></el-checkbox>
                    <el-checkbox label="面试/入职登记表" name="type"></el-checkbox>
                    <el-checkbox label="笔试面试评价及录用审批表" name="type"></el-checkbox>
                    <el-checkbox label="录用通知书" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="面试记录">
                    <el-input type="textarea" v-model="form.recode"></el-input>
                </el-form-item>
            </div>
            <hr />
            <div class="line">
                <el-form-item label="合同类型">
                    <el-radio-group v-model="form.hetongtype">
                    <el-radio label="固定期限"></el-radio>
                    <el-radio label="无固定期限"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
            <div class="line">
                <v-distpicker class="distpicker" province="广东省" city="广州市" area="番禺区"></v-distpicker>
            </div>   
        </el-form>
        <amap />
    </div>
</template>
<style src="./edit.scss" lang="scss" scoped></style>
<script lang="ts">
import Vue from 'util/vueExt'
import { Component, Watch } from 'vue-property-decorator'
import Amap from 'components/amap'
import * as VDistpicker from 'v-distpicker'
Vue.use(VDistpicker)
@Component({
        components: {
        VDistpicker,
        Amap
    }
})
export default class Edit extends Vue {

    form = {
        hr: '',
        recode: '',
        hetongtype: ''
    }
}
</script>