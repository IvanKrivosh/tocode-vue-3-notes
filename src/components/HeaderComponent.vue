<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <a class="navbar-logo" href="/">{{ title }}</a>
        <ul class="navbar-list">
          <li v-for="item of links" class="navbar-item" :key="item.link">
            <router-link :to="item.link" class="navbar-link">{{
              item.label
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { links, title } from '@/_config';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      title,
      links,
    };
  },
};
</script>
