<template>
  <div class="wrapper">
    <HeaderComponent />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style lang="scss"></style>
<script>
import FooterComponent from '@/components/FooterComponent';
import HeaderComponent from '@/components/HeaderComponent';
export default {
  components: { HeaderComponent, FooterComponent },
};
</script>
