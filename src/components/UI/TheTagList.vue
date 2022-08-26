<template>
  <div class="d-flex">
    <TheTag
      v-for="(tag, index) of props.tags"
      :key="index"
      :tag="tag"
      :editable="props.editable"
      :ref="
        el => {
          if (el) tagList[index] = el;
        }
      " />
  </div>
</template>

<script setup>
import TheTag from '@/components/UI/TheTag';
import { ref, defineProps, defineExpose, onBeforeUpdate } from 'vue';
const tagList = ref([]);
const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
  editable: {
    type: Boolean,
    default: () => false,
  },
});
onBeforeUpdate(() => {
  tagList.value = [];
});
const getTags = () => {
  const labels = tagList.value.filter(x => x.isSelected).map(x => x.label);
  tagList.value.forEach(x => x.unselected());
  return labels;
};

defineExpose({
  getTags,
});
</script>

<script>
export default {
  name: 'TheNoteFooter',
};
</script>

<style></style>
