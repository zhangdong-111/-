<template>
  <div>
    <el-table :data="roleList" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <div>
            <el-tag v-if="item.row.status == 1" type="success">启用</el-tag>
            <el-tag v-else type="danger">禁用</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="item">
          <div>
            <el-button type="info" plain @click="edit(item.row.id)"
              >编辑</el-button
            >
            <el-button @click="del(item.row.id)" type="danger" plain
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { getRoleDelete } from "../../util/axios";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  computed: {
    ...mapGetters({
      roleList: "role/getRoleList",
    }),
  },
  mounted() {
    // 组件一加载触发
    this.getRoleAction();
  },
  methods: {
    ...mapActions({
      getRoleAction: "role/getRoleAction",
    }),
    //删除
    del(id) {
      this.$confirm("确定要删除这一条吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          getRoleDelete({ id }).then((res) => {
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              this.getRoleAction();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 编辑
    edit(id) {
      this.$emit("edit", id);
    },
  },
};
</script>

<style lang="" scoped>
</style>