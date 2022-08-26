<template>
  <div style="height: 40px">
    <ul class="navbar-list">
      <li v-for="item of links" class="navbar-item" :key="item.link">
        <router-link :to="item.link" class="navbar-link">{{
          item.label
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { links, title } from '@/_config';
export default {
  name: 'FooterComponent',
  data() {
    return {
      title,
      links,
    };
  },
};
</script>
