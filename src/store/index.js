import { createStore } from 'vuex';
import { getNotesStorage, setNotesStorage } from '@/utils/localStorage';

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    getNotes(state) {
      return state.notes;
    },
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNewNote(state, note) {
      state.notes.push({ id: Date.now(), ...note });
      setNotesStorage(state.notes);
    },
    deleteNote(state, index) {
      state.notes.splice(index, 1);
      setNotesStorage(state.notes);
    },
  },
  actions: {
    getNotes({ commit }) {
      commit('setNotes', getNotesStorage() || []);
    },
  },
  modules: {},
});
