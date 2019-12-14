<template>
  <div class="container">
    <div class="content">
      <md-card md-with-hover>
        <md-card-header>
          <div class="md-title">添加仓库源</div>
          <div v-if="name" class="md-subhead">{{name}}</div>
        </md-card-header>

        <md-card-content class="card-content alert">{{url}}</md-card-content>

        <md-card-actions>
          <md-button :href="repoSchema" class="md-primary md-raised">添加</md-button>
          <md-button @click="copyUrl">复制</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import { getPageQuery } from "../utils/common";
export default {
  components: {},

  data() {
    return {
      url: "",
      name: "",
      type: ""
    };
  },

  created() {
    const params = getPageQuery();
    Object.keys(params).forEach(key => {
      this[key] = params[key];
    });
  },
  methods: {
    copyUrl() {
      this.$copyText(this.url).then(
        function(e) {
          console.log(e);
        },
        function(e) {
          alert("Can not copy");
          console.log(e);
        }
      );
    }
  },

  computed: {
    repoSchema() {
      return `dora://repo?url=${this.url}`;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.content {
  min-width: 400px;
}
.card-content {
  text-align: center;
}
.qrcode {
  width: 400px;
  height: 400px;
}
</style>