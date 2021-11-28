import Notebook from "../../apis/notebooks";

const state = {
  notebooks: [],
};

const getters = {
  notebooks: (state) => state.notebooks || [],
};

const mutations = {
  setNotebooks(state, payload) {
    state.notebooks = payload.notebooks;
  },

  addNotebook(state, payload) {
    state.notebooks.unshift(payload.notebook);
  },

  updateNotebook(state, payload) {
    let notebook = state.notebooks.find(
      (notebook) => notebook.id === payload.notebookId || {}
    );
    notebook.title = payload.title;
  },

  deleteNotebook(state, payload) {
    state.notebooks = state.notebooks.filter((notebook) => {
      notebook.id !== payload.notebookId;
    });
  },
};

const actions = {
  getNotebooks({ commit }) {
    return Notebook.getAll().then((res) => {
      commit("setNotebooks", { notebooks: res.data });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
