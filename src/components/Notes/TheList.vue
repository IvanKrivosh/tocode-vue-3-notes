<template>
  <TheNote
    v-for="(item, index) of props.items"
    :item="item"
    :index="index"
    :key="index"
    @onRemove="emits('onRemoveItem', $event)" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import TheNote from '@/components/Notes/TheNote';
const props = defineProps({
  items: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
const emits = defineEmits(['onRemoveItem']);
</script>

<script>
export default {
  name: 'TheList',
};
</script>

<style scoped></style>
