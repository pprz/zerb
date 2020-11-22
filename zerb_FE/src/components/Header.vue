<template>
  <div class="title">
    <span class="add">
      <el-button
      round
      type="success"
      @click="create"
      icon="el-icon-plus">新建</el-button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    create() {
      this.$emit('handleCreate')
    }
  }
}
</script>

<style scoped lang="scss">
  .title {
    height: 59px;
    line-height: 59px;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;
    .add {
      float: right;
      margin-right: 10px;
      cursor: pointer;
    }
  }

</style>
