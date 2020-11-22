<template>
  <div class="container">
    <div class="title">
      <span>{{editEmployeeID>=0?'修改':'添加'}}</span>
      <span class="back" @click="back">
        <i class="iconfont icon-fanhui"></i> 返回
      </span>
    </div>
    <el-divider></el-divider>
    <div class="wrap">
      <el-row>
        <el-col :lg="16" :md="20" :sm="24" :xs="24">
          <el-form :model="form" status-icon ref="form" label-width="100px" v-loading="loading" @submit.native.prevent>
            <el-form-item label="姓名*" prop="name">
              <el-input size="medium" v-model="form.name" placeholder="请填写姓名"></el-input>
            </el-form-item>
            <el-form-item label="性别*" prop="sex">
              <el-input size="medium" v-model="form.sex" placeholder="请填写性别"></el-input>
            </el-form-item>
            <el-form-item label="年龄*" prop="age">
              <el-input size="medium" v-model="form.age" placeholder="请填写年龄"></el-input>
            </el-form-item>
            <el-form-item label="职位*" prop="position">
              <el-input size="medium"  placeholder="请输入职位" v-model="form.position">
              </el-input>
            </el-form-item>
            <el-form-item label="经验*" prop="year">
              <el-input size="medium"  placeholder="请输入经验年限" v-model="form.year">
              </el-input>
            </el-form-item>
            <el-form-item label="工资*" prop="salary">
              <el-input size="medium"  placeholder="请输入工资" v-model="form.salary">
              </el-input>
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click="submitForm('form')">保 存</el-button>
              <el-button @click="resetForm('form')">重 置</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {
  getEmployeebyId,
  createEmployee,
  updateEmployeeById
} from '@/api/employeeApi'
export default {
  props: {
    editEmployeeID: {
      type: Number
    }
  },
  data() {
    return {
      loading: false,
      form: {
        name: '',
        sex: '',
        age: '',
        position: '',
        year: '',
        salary: ''
      }
    }
  },
  async mounted() {
    if (this.editEmployeeID >= 0) {
      this.loading = true
      this.form = await getEmployeebyId(this.editEmployeeID)
      this.loading = false
    }
  },
  methods: {
    async submitForm() {
      if (this.editEmployeeID < 0) {
        const res = await createEmployee(this.form)
        this.$message(`添加员工${res.message}`)
        this.$emit('createdandEditClose')
      } else {
        const res = await updateEmployeeById(this.editEmployeeID, this.form)
        this.$message(`修改员工${res.message}`)
        this.$emit('createdandEditClose')
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    back() {
      this.$emit('createdandEditClose')
    }
  }
}
</script>

<style scoped lang="scss">
  .el-divider--horizontal {
  margin: 0;
}

.container {
  .title {
    height: 59px;
    line-height: 59px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    text-indent: 40px;

    .back {
      float: right;
      margin-right: 40px;
      cursor: pointer;
    }
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
