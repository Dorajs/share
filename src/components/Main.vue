<template>
  <div class="container">
    <div class="content">
      <md-card>
        <md-card-header>
          <div class="md-title" v-if="type == 'repo'">添加仓库源</div>
          <div class="md-title" v-else-if="type == 'addon'">添加扩展</div>
          <div v-if="name" class="md-subhead">{{name}}</div>
        </md-card-header>

        <md-card-content class="card-content alert">{{url}}</md-card-content>

        <md-card-actions>
          <md-button @click="addToDora" class="md-primary md-raised">添加</md-button>
          <md-button @click="copyUrl">复制</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      name: "",
      type: ""
    };
  },

  created() {
    const urlParams = new URLSearchParams(window.location.search);
    this.url = urlParams.get("url");
    this.name = urlParams.get("name");
    this.type = urlParams.get("type");
  },
  methods: {
    addToDora() {
      let schema = null;
      if (this.type == "repo") {
        schema = `dora://repo?url=${this.url}`;
      } else if (this.type == "addon") {
        schema = `dora://addon?url=${this.url}`;
      }
      if (schema) {
        window.location.href = schema;
      }
    },
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
  min-width: 300px;
  margin: auto 10px;
}

.card-content {
  text-align: center;
}
.qrcode {
  width: 400px;
  height: 400px;
}
</style>