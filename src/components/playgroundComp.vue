<template>
  <div>
    <h1>Employees</h1>

    <md-table v-if="employees.data">
      <md-table-row>
        <md-table-head v-for="header in employees.headers" :key="header">{{
          header
        }}</md-table-head>
      </md-table-row>
      <md-table-row v-for="row in employees.data" :key="row.i">
        <md-table-cell v-for="employee in row" :key="employee.id"
          ><img v-if="checkURL(employee)" :src="employee" width="80" />
          <span v-else>{{ employee }}</span>
        </md-table-cell>
      </md-table-row>
    </md-table>
    <span v-else>cant recive data from server</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PlaygroundComp',
  components: {},
  methods: {
    checkURL(url) {
      return String(url).match(/\.(jpeg|jpg|gif|png)$/) != null
    },
  },
  computed: {
    ...mapState('employees', ['employees']),
  },
  created() {
    this.$store.dispatch('employees/getEmployees')
  },
}
</script>
