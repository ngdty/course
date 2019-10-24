<template>
  <div class="nav">
    <div class="top-nav">
      <h3>使用硬件</h3>
      <ul>
        <li>树莓派</li>
        <li>Arduino</li>
        <li>树莓派</li>
        <li>树莓派</li>
      </ul>
    </div>
    <div class="bottom-nav">
      <h3>使用软件</h3>
      <ul>
        <li>树莓派</li>
        <li>树莓派</li>
        <li>树莓派</li>
        <li>树莓派</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
<style scoped lang="scss">
/*li {
  display: inline-block;
  margin: 0 10px;
}*/
a {
  color: #42b983;
}
.nav{
  width: 150px;
}
.bottom-nav{
  margin-top: 30px;
}
</style>
