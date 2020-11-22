<template>
  <div >
    <div class="dashboard-container" v-if="!(showEdit||showCreate)">
      <Header @handleCreate="handleCreate"/>
      <el-row class="data-container"
      :gutter="20"
      >
        <common-card
          v-for="employee in employees"
          :key="employee.id"
          :name="employee.name"
        >
          <template>
            <div class="content-wrapper">
              <span class="title">性别 </span>
              <span class="value">{{employee.sex}}</span>
            </div>
            <div class="content-wrapper">
              <span class="title">年龄 </span>
              <span class="value">{{employee.age}}</span>
            </div>
            <div class="content-wrapper">
              <span class="title">经验 </span>
              <span class="value">{{employee.year}}年</span>
            </div>
            <div class="content-wrapper">
              <span class="title">职位 </span>
              <span class="value">{{employee.position}}</span>
            </div>
            <div class="content-wrapper">
              <span class="title">工资 </span>
              <span class="value">¥ {{format(employee.salary)}}</span>
            </div>
          </template>
          <template v-slot:footer>
            <el-button circle
            type="primary"
            icon="el-icon-edit"
            @click="handleEdit(employee.id)"
            ></el-button>
            <el-button
            circle
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete(employee.id)"
            ></el-button>
          </template>
        </common-card>
      </el-row>
      <el-row>
        <el-col>
        <el-pagination
          :background="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="pageCount"
          :current-page="currentPage"
          layout="total, prev, pager, next, jumper"
          :total="totalCount"
        ></el-pagination>

        </el-col>
      </el-row>
    </div>
    <create-and-update
    v-else
    @createdandEditClose="createdandEditClose"
    :editEmployeeID="editEmployeeID"/>
  </div>
</template>

<script>
import CommonCard from '@/components/CommonCard'
import Header from '@/components/Header'
import CreateAndUpdate from '@/components/CreateAndUpdate'
import { getEmployees, deleteEmployeebyId } from '@/api/employeeApi'
export default {
  name: 'Dashboard',
  components: {
    CommonCard,
    Header,
    CreateAndUpdate
  },

  data () {
    return {
      employees: [],
      editEmployeeID: Number,
      showEdit: false,
      showCreate: false,
      currentPage: 1,
      pageCount: 15,
      totalCount: 0
    }
  },
  async mounted() {
    this.getEmployees(this.currentPage, this.pageCount)
  },
  methods: {
    handleEdit(id) {
      this.showEdit = true
      this.editEmployeeID = id
    },
    handleCreate(id) {
      this.showCreate = true
      this.editEmployeeID = -1
    },
    async handleDelete(id) {
      const res = await deleteEmployeebyId(id)
      this.$message(`删除员工${res.message}`)
      this.getEmployees()
    },
    createdandEditClose() {
      this.showCreate = false
      this.showEdit = false
      this.getEmployees(this.currentPage, this.pageCount)
    },
    async getEmployees(currentPage, pageCount) {
      const result = await getEmployees(currentPage, pageCount)
      this.employees = result.data
      this.totalCount = parseInt(result.totalCount)
    },
    handleSizeChange (val) {
      this.pageCount = val
      this.getEmployees(this.currentPage, this.pageCount)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getEmployees(this.currentPage, this.pageCount)
    },
    /**
 *  数字千分号格式
 * @param {*} v
 */
    format(v) {
      const reg = /\d{1,3}(?=(\d{3})+$)/g
      return `${v}`.replace(reg, '$&,')
    }
  }
}
</script>

<style scoped lang="scss">
  .dashboard-container{
    background: #eee;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
  }
  .content-wrapper{
    margin-top: 5px;
    color: #666;
    width: 30%;
  }

</style>
