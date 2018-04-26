import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './amap.vue'
import VueAMap from 'vue-amap'

Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
    key: 'fb0b5213263ffd6b361f1e4f79bea358',
    plugin: [
        'Geolocation',
        'Geocoder',
        'AMap.Geolocation',
        'AMap.Autocomplete',
        'AMap.PlaceSearch',
        'AMap.Scale',
        'AMap.OverView',
        'AMap.ToolBar',
        'AMap.PolyEditor',
        'AMap.CircleEditor'
    ]
})

@Component({
    mixins: [Template]
})
export default class Amap extends Vue {
    amapManager = new VueAMap.AMapManager()
    searchOption = {
        city: '全国',
        citylimit: false
    }

    markers = []
    mapCenter = [121.59996, 31.197646]
    lng = 0
    lat = 0
    address = ''
    center = []
    zoom:number = 12
    /**
     * 搜索位置
     */
    onSearchResult(pois) {
        this.markers = []
        let latSum = 0
        let lngSum = 0
        if (pois.length > 0) {
            pois.forEach(poi => {
                let { lng, lat } = poi
                lngSum += lng
                latSum += lat
                this.markers.push(this.setMaker(poi.lng, poi.lat))
            })
            let center = {
                lng: lngSum / pois.length,
                lat: latSum / pois.length
            }
            this.mapCenter = [center.lng, center.lat]
        }
    }

    /**
     * 返回封装位置数据
     */
    setMaker(lng, lat, draggable = false) {
        let obj = {
            position: [lng, lat],
            events: {
                click: e => {
                    this.lat = e.lnglat.lat
                    this.lng = e.lnglat.lng
                    this.address = this.$refs['search'][
                        '$el'
                    ].firstChild.firstChild.value
                    this.markers = []
                    this.markers.push(this.setMaker(this.lng, this.lat))
                },
                dragend: e => {}
            },
            draggable: draggable
        }
        return obj
    }

    get getEvents() {
        return {
            init: o => {
                o.getCity(result => {})
            },
            moveend: () => {},
            zoomchange: () => {},
            click: e => {
                let { lng, lat } = e.lnglat
                this.lng = lng
                this.lat = lat
                this.markers = []
                this.markers.push(this.setMaker(lng, lat))
                const geocoder = new window['AMap'].Geocoder({
                    radius: 1000,
                    extensions: 'all'
                })
                geocoder.getAddress([lng, lat], (status, result) => {
                    if (status === 'complete' && result.info === 'OK') {
                        if (result && result.regeocode) {
                            this.address = result.regeocode.formattedAddress

                            this.$emit('getPositionData', {
                                address: this.address,
                                lng: this.lng,
                                lat: this.lat
                            })

                            this.$nextTick()
                        }
                    }
                })
                this.$nextTick()
            }
        }
    }

    get getPlugin() {
        return [
            'ToolBar',
            {
                pName: 'Geolocation',
                events: {
                    init(o) {
                        // o 是高德地图定位插件实例
                        o.getCurrentPosition((status, result) => {
                            if (result && result.position) {
                                this.lng = result.position.lng
                                this.lat = result.position.lat
                                this.center = [this.lng, this.lat]
                                this.loaded = true
                                // this.mapCenter = [result.position, result.position.lat]
                            }
                        })
                    }
                }
            }
        ]
    }

    // 根据经纬度获取地址
    getAddressByLatLng(lng,lat){
        const geocoder = new window['AMap'].Geocoder({
            radius: 1000,
            extensions: 'all'
        })
        geocoder.getAddress([lng, lat], (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                    this.$emit('getAddressByLatLng',result.regeocode.formattedAddress)
                }
            }
        })
    }

    // 增加位置
    addPosition(lng,lat) {
        this.markers.push(this.setMaker(lng,lat))
    }
    // 清空位置
    cleanPosition() {
        this.markers = []
    }
    // 设置缩放比例
    setZoom(zoom) {
        this.zoom = zoom
    }

    setMapCenter(v) {
        this.mapCenter = v
        this.markers = []
        this.markers.push(this.setMaker(v[0],v[1]))
    }

}
