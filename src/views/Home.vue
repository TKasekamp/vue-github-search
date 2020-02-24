<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <SearchInput
            @input="log"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue';

export default {
  name: 'Home',
  components: {
    SearchInput,
  },

  methods: {
    log(input) {
      console.log(input);
    },
  },
};
</script>
