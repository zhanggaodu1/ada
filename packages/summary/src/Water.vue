<script setup>
import { ref } from 'vue'
const column_1 = ref(null)
const column_2 = ref(null)

const list = [
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/cc902851e65180028d9967bae7ad5795?width=3039&height=2772'},
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/2944ed00750c7bd5014c3d9013110b59?width=1000&height=970&hTag=d7a495871ba01409369e6c2231ad49f0'},
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/b38348e4ff099a33e63eaf3ddad4c225?width=1080&height=799&hTag=d7a495871ba01409369e6c2231ad49f0&x-oss-process=image/resize,p_50'},
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/a5898d3e7ae7c9155c2708289db41713?width=1604&height=1614&hTag=d7a495871ba01409369e6c2231ad49f0&x-oss-process=image/resize,p_50'},
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/b38348e4ff099a33e63eaf3ddad4c225?width=1080&height=799&hTag=d7a495871ba01409369e6c2231ad49f0&x-oss-process=image/resize,p_50'},
  {name: 'wewe', info: 'ewr',image_url: 'https://img.artproglobal.com/c/a5898d3e7ae7c9155c2708289db41713?width=1604&height=1614&hTag=d7a495871ba01409369e6c2231ad49f0&x-oss-process=image/resize,p_50'}
]
function getQuery(name, str) {
  if (!str) str = location.href
  let reg = new RegExp("(^|&)" + name + "=([^#|&]*)(#|&|$)", "i")
  if (str.indexOf("?") > -1) {
    str = str.split("?")[1]
    let r = str.match(reg)
    if (r != null) return decodeURIComponent(r[2]);
  }
  return null
}

function getImageWH(url) {
  let w = getQuery('width', url)
  let h = getQuery('height', url)
  if (w == '' || h == '') return { width: 0, height: 0, scale: 1 }
  let width = +w
  let height = +h
  return { width, height, scale: Number(width/height).toFixed(2) }
}

const getHeight = (image_url) => {
  // let scale = getImageWH(image_url).scale
  // let width = (window.innerWidth -20) / 2
  // height = width / Number(scale)
  // return  height > 500 ? 500 : height
  let css_Width = (window.innerWidth-20) / 2
  let scale = Math.floor(  getImageWH(image_url).width / css_Width)
  let height = Math.floor(getImageWH(image_url).height / scale)
  return height
}

const getList = () => {
  let div_content = document.createElement('div')
  let image_content = document.createElement('img')
  image_content.style
  div.appendChild(image_content)
  list.map((item, index) => {
    console.log(getHeight(item.image_url))
    if (index == 0) {
      column_1.append
    }
  })
}
getList()

</script>
<template>
    <div>瀑布流</div>
    <div class="content">
      <div class="contain" ref="column_1"></div>
      <div class="contain" ref="column_2"></div>
      <!-- <template v-for="item in list">
        <div>
          <img class="" :style="`height:${getHeight(item.image_url)}px`" :src="item.image_url" alt="">
          <div>{{ item.info }}</div>
          <div>{{ item.name }}</div>
        </div>
      </template> -->
    </div>
</template>
<style lang="scss" scoped>
.contain {
  float: left;
  width: 50%;
  border: 1px solid #000;
}

</style>