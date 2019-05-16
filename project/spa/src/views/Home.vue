<template>
  <div class="home" @click="homeEvent">
    <div @click.capture="parentEvent">
      <div @click="childrenEvent1">childrenEvent1</div>
      <div @click="childrenEvent2">childrenEvent2</div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" @click="toggleSheets">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <bxs-default-page></bxs-default-page> -->
    <bxs-bottom-sheets v-model="isShow" title="自定义标题">
      <div>你的自定义内容</div>
    </bxs-bottom-sheets>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import 'bxs-ui-vue/lib/bottom-sheets/index.css'
import BottomSheets from 'bxs-ui-vue/lib/bottom-sheets/index.js'
import { concat } from 'lodash'
import base64 from 'js-base64'
export default {
  name: 'home',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    toggleSheets () {
      this.isShow = !this.isShow
    },
    homeEvent () {
      console.log('homeEvent')
    },
    parentEvent () {
      console.log('parentEvent')
    },
    childrenEvent1 () {
      console.log('childrenEvent1')
    },
    childrenEvent2 () {
      console.log('childrenEvent2')
    }
  },
  mounted () {
    console.log(base64.Base64.encode('oss/default-dir/eY2SHb7PmE.png'))
    console.log(concat)
  },
  components: {
    HelloWorld,
    // [DefaultPage.view.name]: DefaultPage.view,
    [BottomSheets.name]: BottomSheets
  }
}
</script>
