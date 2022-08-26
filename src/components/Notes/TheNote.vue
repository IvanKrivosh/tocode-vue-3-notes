<template>
  <div class="note-item">
    <div class="d-flex note-item-header">
      <TheTagList class="note-tags" :tags="noteTags" />
      <button
        class="btn btnDanger"
        @click="emits('onRemove', { index: props.index })">
        Х
      </button>
    </div>
    <hr />
    <div>
      {{ props.item.value }}
    </div>
  </div>
</template>

<script setup>
import { tags, defaultTag } from '@/_config';
import { defineProps, defineEmits, computed } from 'vue';
import TheTagList from '@/components/UI/TheTagList';
const props = defineProps({
  item: {
    type: Object,
    default: () => ({ value: '', tags: [] }),
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});
const emits = defineEmits(['onRemove']);
const noteTags = computed(() => {
  if (props.item.tags && props.item.tags.length) {
    return tags.filter(x => props.item.tags.includes(x.label));
  } else return [defaultTag];
});
</script>

<script>
export default {
  name: 'TheNote',
};
</script>

<style>
.note-item-header {
  display: flex;
}
.note-item-header > .note-tags {
  flex-grow: 1;
  align-items: center;
}
.note-item {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  padding: 5px;
  background-color: white;
  margin-bottom: 10px;
}
</style>
