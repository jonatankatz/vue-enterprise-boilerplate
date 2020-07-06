import axios from 'axios'
import getTableStructure from '@utils/get-table-structure'

const employees = {
  namespace: true,
  state: {
    employees: [],
  },
  mutations: {
    GET_EMPLOYEES(state, data) {
      const allEmployees = getTableStructure(data.data)
      state.employees = allEmployees
    },
  },
  actions: {
    getEmployees({ commit }) {
      axios
        .get('https://reqres.in/api/users?page=2')
        .then((res) => {
          commit('GET_EMPLOYEES', res.data)
        })
        .catch((err) => err)
    },
  },
}

export default employees
