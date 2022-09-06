<template>
  <div class="home">
    <TheForm @onSubmit="handlerSubmit" />
    <hr />
    <TheList :items="notes" @onRemoveItem="handlerRemoveItem" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';
import TheForm from '@/components/Notes/TheForm';
import TheList from '@/components/Notes/TheList';
const store = useStore();
const notes = computed(() => store.getters.getNotes);

const handlerSubmit = ({ value, tags }) => {
  store.commit('addNewNote', { value, tags });
};

const handlerRemoveItem = e => {
  store.commit('deleteNote', e.index);
};

onMounted(() => {
  store.dispatch('getNotes');
});
</script>

<script>
export default {
  name: 'HomeView',
};
</script>
