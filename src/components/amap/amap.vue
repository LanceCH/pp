<template>
    <div class="amap">
        <el-amap-search-box
            class="search-box"
            :search-option="searchOption"
            :on-search-result="onSearchResult"
            ref="search"
        ></el-amap-search-box>
        <el-amap ref="map" vid="amapDemo" :plugin="getPlugin" :center="mapCenter" :zoom="zoom" class="amap-map" :events="getEvents">
            <el-amap-marker ref="maker" v-for="(marker,i) in markers"
            :key="i"
            :position="marker.position"
            :events="marker.events"
            :draggable="marker.draggable"></el-amap-marker>
        </el-amap>
    </div>
</template>
<style src="./amap.scss" lang="scss" scoped></style>
