<script setup>
import { ref } from 'vue'
const roll = ref(null)
const prize_list = ref([
  {'name':'海鲜套餐'},
  {'name':'谢谢参与'},
  {'name':'小米手机'},
  {'name':'蓝牙耳机'},
  {'name':'apple watch'},
  {'name':'迪士尼苹果'}
])

const bindRotate = () => {
  // let prev = performance.now() // 从页面加载开始经过的毫秒数
  console.log('zhuandong')
  animate({timing: timing,draw: draw,duration: 4000})
}

const timing = (timeFraction) => {
  return timeFraction;
}

const draw = (progress) => {
  roll.value.style.transform = `rotate(${progress * 10}deg)`
}

const animate = ({timing, draw, duration}) => {
  let start = performance.now()
  requestAnimationFrame(function animate(time) {
    // timeFraction 从 0 增加到 1
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1
    // 计算当前动画状态
    let progress = timing(timeFraction)
    draw(progress) // 绘制
    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}

window.addEventListener('keyup',(event) =>{
console.log(event.code === 'KeyS')
})

</script>

<template>
  <div>转盘</div>
  <div ref="roll" class="roll relative">
    <div class="prize absolute">
      <template v-for="(item,index) in prize_list" :key="index">
        <div class="item" :style="` transform: rotate(${30 + (index * 60)}deg);`">{{item.name}}</div>
      </template>
    </div>
  </div>
  <div class="btn" @click="bindRotate">点击</div>
</template>

<style lang="scss" scoped>
.roll {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #000;
}
.btn {
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid rebeccapurple;
}
.prize {
  left: 25%;
  top: 0;
  width: 50%;
  height: 50%;
}
.item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>