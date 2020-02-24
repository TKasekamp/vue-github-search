<template>
  <v-text-field
    v-model="message"
    append-outer-icon="mdi-send"
    filled
    clear-icon="mdi-close-circle"
    clearable
    label="Search repositories"
    type="text"
    :loading="loading"
    :readonly="loading"
    @click:append-outer="sendMessage"
    @click:clear="clearMessage"
 />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchInput',

  data: () => ({
    show: false,
    message: '',
    marker: true,
  }),

  props: {
    loading: Boolean,
  },

  methods: {
    sendMessage() {
      // this.clearMessage();
    },
    clearMessage() {
      this.message = '';
    },
  },
});
</script>
