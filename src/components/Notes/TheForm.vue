<template>
  <form action="" @submit.prevent="onSubmit">
    <textarea type="text" v-model="note" required placeholder="Введите текст" />
    <div class="d-flex justify-space-between">
      <div>
        <TheTagList ref="tagList" :editable="true" :tags="tags" />
      </div>
      <button class="btn btnPrimary" type="submit">Добавить заметку</button>
    </div>
  </form>
</template>

<script setup>
import { tags, defineEmits } from '@/_config';
import { ref } from 'vue';
import TheTagList from '@/components/UI/TheTagList';
let note = ref('');
const tagList = ref(null);
const emits = defineEmits(['onSubmit']);
function onSubmit() {
  emits('onSubmit', { value: note.value, tags: tagList.value.getTags() });
  note.value = '';
}
</script>

<script>
export default {
  name: `TheForm`,
};
</script>

<style scoped></style>
