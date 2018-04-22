<template>
    <div class="icon-box">
        <ul class="ul">
          <li class="li" v-for="(v, i) in iconList" :key="i" @click="select(v)">
            <svgicon :icon="v" width="48" height="48"/>
          </li>
        </ul>
    </div>
</template>
<style src="./iconBox.scss" lang="scss" scoped></style>
