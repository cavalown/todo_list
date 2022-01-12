<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header/>
    <TodoContent/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import TodoContent from '@/components/TodoContent.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Header,
    TodoContent,
    Footer
  }
}
</script>

<style lang="scss">
  .home {
    min-height: 700px;
    background-color: rgb(247, 219, 224);
  }
</style>
