<template>
  <div
    :style="{ backgroundColor: props.tag.color }"
    :class="{
      'tag-item': true,
      'tag-selected': state.selected,
      'tag-item-editable': props.editable,
    }"
    @click="setSelected">
    {{ props.tag.label }}
  </div>
</template>

<script setup>
import { defineProps, reactive, defineExpose } from 'vue';

const state = reactive({
  selected: false,
});

const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
  editable: {
    type: Boolean,
    default: () => false,
  },
});

defineExpose({
  get isSelected() {
    return state.selected;
  },
  get label() {
    return props.tag.label;
  },
  unselected() {
    state.selected = false;
  },
});

function setSelected() {
  if (!props.editable) return;
  state.selected = !state.selected;
}
</script>

<script>
export default {
  name: 'TheTag',
};
</script>

<style>
.tag-item-editable {
  opacity: 0.6;
}
.tag-item-editable:hover {
  cursor: pointer;
}
.tag-item {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
  margin-right: 10px;
  padding: 5px;
  font-size: 15px;
}
.tag-selected {
  opacity: 1;
  background-color: #919fc6;
  color: white;
}
</style>
