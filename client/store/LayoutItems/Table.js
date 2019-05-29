import Vue from "vue"

export const state = () => ({
  tables: "",
  tableCandidate: { text: "" }
})

// getters
export const getters = {
  getTables: state => state.tables
}

// mutations
export const mutations = {
  SET_TABLES(state, payload) {
    state.tables = payload
  },

  CREATE_TABLE(state, payload) {
    let str = "<table><tbody>"
    for (let i = 0; i < payload.rows; i++) {
      str = str + "<tr>"
      for (let j = 0; j < payload.rows; j++) {
        str = str + "<th></th>"
      }
      str = str + "</tr>"
    }
    str = str + "</tbody></table>"

    let length = Object.keys(state.tables).length

    let id = length + 1
    let obj = {
      [payload.layoutId]: {
        id: id,
        text: `
        <table>
          <tr>
            <th colspan="3" data-colwidth="100,0,0">Wide header</th>
          </tr>
          <tr>
            <td>One</td>
            <td>Two</td>
            <td>Three</td>
          </tr>
          <tr>
            <td>Four</td>
            <td>Five</td>
            <td>Six</td>
          </tr>
        </table>
      `,
        name: "table",
        itemName: "tables",
        columns: payload.columns,
        rows: payload.rows,
        layout_item_id: payload.layoutId,
        row: payload.layoutId,
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        left: 0,
        width: 400,
        height: 10
      }
    }

    // update tables state
    Vue.set(state.tables, id, obj[payload.layoutId])
  },

  ADD_TABLE(state, payload) {
    let length = Object.keys(state.tables).length
    let id = length + 1
    let obj = {
      [payload]: {
        id: id,
        project_id: payload.projectId,
        text: `
        <table>
        <tr>
          <th colspan="3" data-colwidth="100,0,0">Wide header</th>
        </tr>
        <tr>
          <td>One</td>
          <td>Two</td>
          <td>Three</td>
        </tr>
        <tr>
          <td>Four</td>
          <td>Five</td>
          <td>Six</td>
        </tr>
      </table>
      `,
        name: "table",
        itemName: "tables",
        // columns: payload.columns,
        // rows: payload.rows,
        layout_item_id: payload,
        row: payload,
        background_color: "none",
        border_color: "black",
        border_style: "solid",
        animations: {},
        border_width: 1,
        border_radius: 0,
        opacity: 1.0,
        top: 0,
        left: 0,
        width: 400,
        height: 120
      }
    }

    // update tables state
    Vue.set(state.tables, id, obj[payload])
  }
}

export const actions = {
  initialize({ state, commit }, payload) {
    commit("SET_TABLES", payload)
  },

  createTable({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created table
    let id = Object.keys(state.tables).length + 1

    commit("CREATE_TABLE", payload)
    commit("Layout/CREATE_TABLE", { layoutId: 2, id: id }, { root: true })
  },

  // push obj key to tables ids array
  addTable({ state, commit }, payload) {
    //this is the id that is going to be assigned to the newly created table
    let id = Object.keys(state.tables).length + 1

    commit("ADD_TABLE", payload)
    commit('Layout/ADD_TABLE', {layoutId: payload, id: id, tables: state.tables}, {root: true})
  }
}