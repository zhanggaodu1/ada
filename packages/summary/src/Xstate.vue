<script setup>
  import { createMachine} from 'xstate'
  const state = createMachine ({
    id: 'userState', // 状态机标识
    initial: 'visitor', // 初始状态
    context: { // 整个状态机的本地context
      elapsed: 0,
      direction: 'ee'
    },
    states: { // 状态机的定义
      visitor: {
        tags: '1', // 单标签
        on: {
          TOGGLE: 'active'
        },
        meta: { // 状态的相关静态数据
          message: 'Loading...'
        },
        after: {
          3000: { target: 'failure.timeout' }
        },
      },
      vipPerson: {
        tags: ['1', '2'] // 多标签
      },
      vipCompany: {
        
      },
      blackList: { 
        type: 'final' // atomic 没有子节点  computed 包含子节点
      }
    }
  }, {
    actions: {
      alertRed: (context, event) => {
        console.log('green');
      }
    },
    delays: {

    },
    guards: {

    },
    services: {

    }
  })

// state.withConfig({}) 扩展state
/**
 * 
 * 可以通过json.stringfy把state持久化---存到localStorage里
 * 瞬时状态节点 状态机不会停留 根据条件判断状态机应该去哪个状态
 */

// const noAlertLightMachine = state.withConfig({
//   actions: { // action 不会被覆盖  context会被覆盖 可以使用...获取之前state的context 
//     alertGreen: (context, event) => {
//       console.log('green');
//     }
//   }
// })
// console.log(state.initialState);
// state.value = {vipPerson: 'vipPerson'}
// console.log(state.initial) // 获取状态机 默认的状态
// console.log(state.initialState.value) // 获取状态机 当前的值
// console.log(state.initialState.matches('visitor')) // matches(parent) 确定当前state是否是parent的子集   报错-->必须要加initialState
// console.log(state.initialState.nextEvents)
// console.log(state.children)
// console.log(state.can('TOGGLE'))  // 能不能进行某种操作
// console.log(state.initialState.done) // 是否到了最终值 之后不能再更改状态

</script>

<template>
  <div>
    XState
  </div>

</template>

<style lang="scss" scoped>

</style>