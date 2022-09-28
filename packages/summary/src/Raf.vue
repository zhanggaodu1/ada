<script setup>
  import { ref } from 'vue'
let n = 0
const bindFrame = time => {
  if (time % 10 === 0) {
    console.log(time)
  }
  n++
  requestAnimationFrame(bindFrame(n))

}

const test = () => {
  console.log('----')
}
// console.log(requestAnimationFrame(test))
// cancelAnimationFrame(test)

// class Raf {
//   constructor(duration) {
//     this.duration = duration
//     this.remain = this.duration
//     this.frameCount = 0
//     this.past = 0
//     this.timer = null
//     this.startTime = null
//   }
//   // 1. 判断动画是否执行完
//   // if ()
//   callback (percent) {
//     console.log('callback',percent)
//     if (percent === 1) {
//       this.frameCount = 0
//       this.past = 0
//       this.timer = null
//     } else {
//       this.play()
//     }
//   }
//   frame () {
//     let pre
//     this.remain -= new Date - this.startTime
//     this.remain = Map.max(0, this.remain)
//     pre =  (this.remain / this.duration) || 0
//     this.callback(1-pre)//, this.duration-this.remain, this.duration
//   }
//   play () {
//     console.log('play')
//     this.startTime = +new Date
//     this.timer = requestAnimationFrame(function() {
//       this.frame()
//     })
//   }

// }
// const raf = new Raf(500,(percent) => {
//   console.log(percent)
// })
// console.log('raf---',raf.callback(0))

const animationCate = ref(2)
const animationBox = ref(null)

const toq = () => {
  animationCate.value === 0
}
const tol = () => {
  console.log('-----click')
  animationCate.value === 1
}
const tos = () => {
  animationCate.value === 2
}
</script>

<template>

  <div class="animation">
    <div ref="animationBox" class="animation-box" :class="'animation-'+animationCate">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </div>
  {{ animationBox.style.cssText }}
  <div @click="toq()">起速</div>
  <div @click="tol()">匀速</div>
  <div @click="tos()">慢速</div>
</template>

<style lang="scss" scoped >

.animation {
  width: 300px;
  overflow: hidden;
  border: 1px solid #000;
  padding: 10px 0;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    background-color: blueviolet;
  }
}
.animation-box {
  width: 600px;
  height: 20px;
  display: flex;
  div {
    flex: 0 0 90px;
    margin: 0 5px;
    height: 20px;
    background-color: indianred;
  }

}
@keyframes steps {
  100% {
    transform: translateX(-300px);
  }
} 
.animation-0 {
  animation: steps .5s steps(10) infinite;
}
.animation-1 {
  animation: steps 1s steps(10) infinite;
}
.animation-2 {
  animation: steps 3s steps(10) infinite;
}
</style>