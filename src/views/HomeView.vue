<template>
  <div class="home">
    <TheForm @onSubmit="handlerSubmit" />
    <hr />
    <TheList :items="state.items" @onRemoveItem="handlerRemoveItem" />
  </div>
</template>

<script setup>
import { reactive, watch, onMounted } from 'vue';
import TheForm from '@/components/Notes/TheForm';
import TheList from '@/components/Notes/TheList';

const state = reactive({
  items: [],
  setItems(newItems) {
    if (newItems && newItems.length) this.items.splice(0, 0, ...newItems);
  },
});

const handlerSubmit = ({ value, tags }) => {
  state.items.push({ id: Date.now(), value, tags });
};

const handlerRemoveItem = e => {
  state.items.splice(e.index, 1);
};

watch(state.items, () => {
  saveNotes();
});

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(state.items));
}

function getNotes() {
  const notesString = localStorage.getItem('notes');
  if (notesString) return JSON.parse(localStorage.getItem('notes'));
}

onMounted(() => {
  state.setItems(getNotes());
});
</script>

<script>
export default {
  name: 'HomeView',
};
</script>
