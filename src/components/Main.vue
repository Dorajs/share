<template>
  <div class="container">
    <div class="content">
      <md-card>
        <md-card-content class="card-content">
          <qrcode :value="url" class="qrcode" />
          <div v-if="name">{{name}}</div>
        </md-card-content>

        <md-card-actions>
          <md-button @click="handleTap">查看</md-button>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
import Qrcode from 'vue-qrcode'
import { getPageQuery } from '../utils/common'
export default {
  components: {
    Qrcode,
  },

  data () {
    return {
      url: '',
      name: ''
    }
  },

  created() {
    const params = getPageQuery()
    Object.keys(params).forEach(key => {
      this[key] = params[key]
    })
  },

  methods: {
    handleTap () {}
  },
}
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