<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">基础入门</router-link> |
      <router-link to="/MachineVision">机器视觉</router-link> |
      <router-link to="/VoiceTechnology">语音技术</router-link> |
      <router-link to="/KnowledgeGraph">知识图谱</router-link> |
      <router-link to="/ARVR">AR/VR</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./sass/base.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 25px;
  padding: 0 20px;
}

#nav {
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding:0 20px;
}
#nav a.router-link-exact-active{
  color: #42b983;
}
</style>
