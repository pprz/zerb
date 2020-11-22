<template>
  <div class="common-card">
    <el-col :xs="24" :sm="12" :md="8" :lg="6">
      <el-card>
          <div class="name">{{name}}</div>
          <div class="content">
            <slot></slot>
          </div>
          <div class="line"/>
          <div class="footer">
            <slot name="footer"></slot>
          </div>
      </el-card>
    </el-col>
  </div>

</template>

<script>
export default {
  props: {
    name: String
  },
  data () {
    return {

    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang="scss">
.common-card{
  font-size: 12px;
  color: #999;
  .el-card{
    margin-bottom: 20px;
    .name{
      font-size: 20px;
    }
    .footer{
      font-size: 12px;
      color: #000;
      letter-spacing: 1px;
    }
    .content{
      height: 80px;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content:flex-start;
    }
    .line{
      margin: 10px 0;
      border-top: 1px solid #eee;
    }
  }
}
</style>
