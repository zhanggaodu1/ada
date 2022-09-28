<script>

</script>

<template>
  <h5>不使用js也能做到的事情</h5>
  <div class="cut-conner">
    切角
  </div>
  <div class="cut-conner-inset">
    内切角
  </div>
  <div class="t">
    梯形
  </div>


</template>

<style lang="scss" scoped>
  .t {
    margin: 0 30px;
    padding: .5em 1em .35em;
    background-color: #58a;
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
  }

// DRY ?
// background-clip: padding-box; 避免背景蔓延到padding
// 可以实现传参  mixin include
.cut-conner {
  background: #58a;
  background:
  linear-gradient(135deg, transparent 15px, #58a 0)
  top left,
  linear-gradient(-135deg, transparent 15px, #58a 0)
  top right,
  linear-gradient(-45deg, transparent 15px, #58a 0)
  bottom right,
  linear-gradient(45deg, transparent 15px, #58a 0)
  bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;

  // border-image 也可以做到切角  设置border的颜色是避免浏览器不支持border-image
  // border: 20px solid #58a;
  // border-image: 1 url('data:image/svg+xml,\
  // <svg xmlns="http://www.w3.org/2000/svg"\
  // width="3" height="3" fill="%2358a">\
  // <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
  // </svg>');
  // background: #58a;
  // background-clip: padding-box;

  // width: 200px;
  // height: 100px;
  // background: #58a;
  // clip-path: polygon(
  // 20px 0, calc(100% - 20px) 0, 100% 20px,
  // 100% calc(100% - 20px), calc(100% - 20px) 100%,
  // 20px 100%, 0 calc(100% - 20px), 0 20px
  // );
}

.cut-conner-inset {
  height: 20px;
  background: #58a;
  background:
  radial-gradient(circle at top left,
  transparent 15px, #58a 0) top left,
  radial-gradient(circle at top right,
  transparent 15px, #58a 0) top right,
  radial-gradient(circle at bottom right,
  transparent 15px, #58a 0) bottom right,
  radial-gradient(circle at bottom left,
  transparent 15px, #58a 0) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}
</style>