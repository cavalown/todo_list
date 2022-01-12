<template>
  <div class="header">
    <h1>Cavalon's Todo List</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.header {
  background-color: rgb(111, 189, 192);
  margin-bottom: 20px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: rgb(201, 228, 223);
    line-height: 50px;
    font-size: 40px;
  }
}
</style>
