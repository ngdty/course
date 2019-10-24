<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="content">
      <ul class="items">
        <li>项目1</li>
        <li>项目2</li>
        <li>项目3</li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
<style>
.home{
  display: flex;
  justify-content: space-between;
}
.content{
  width: 100%;
}
.items li{
  height: 200px;
  border: 1px solid black;
}
</style>
