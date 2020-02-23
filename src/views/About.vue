<template>
  <div class="about">
    <h1>This is an about page</h1>
    <composition/>
  </div>
</template>
<script>
// @ is an alias to /src
import Composition from '@/components/Composition.vue';

export default {
  name: 'About',
  components: {
    Composition,
  },
};
</script>
