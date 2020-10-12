<template>
  <div class="vue">
    <div v-if="loading">
      Loading...
    </div>
    <div v-else v-for="contributor in contributors" :key="contributor.login">
      <img class="vue-picture" :src="contributor.avatar_url" />
      <h5 class="vue-user">{{contributor.login}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-app-demo',
  data: function() {
    return {
      contributors: [],
      loading: false,
    }
  },
  methods: {
    async getRepoOwner ({ repo }) {
      if (!repo) return;
      try {
        this.contributors = []
        this.loading = true;

        const response = await fetch(`https://api.github.com/repos/${repo}/contributors`)
        const data = await response.json()

        this.contributors = data
        this.loading = false;
      } catch (error) {
        console.log(error)
        this.contributors = []
        this.loading = false;
      }
    }
  },
  created: function () {
    window.addEventListener('hashchange', () => {
      const repo = window.location.hash.split('#')[1]

      this.getRepoOwner({ repo })
    })
  },
}
</script>

<style>
  .vue {
    display: flex;
    flex-wrap: wrap;
  }

  .vue-picture {
    border-radius: 10px;
    width: 120px;
    margin: 10px;
  }

  .vue-user {
    margin: 0;
    text-align: center;
  }
</style>