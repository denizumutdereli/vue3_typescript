<!-- Home -->

<template>
  <n-result
    status="success"
    title="Dashboard"
    description="Vue.js 3.x + TS"
    size="huge"
  >
    <template #footer>
      <!-- <n-p v-if="currentUser1">Hey1, {{ currentUser1.name }}</n-p> -->
      <n-button @click="handleClick">I'm ready to build...</n-button>
    </template>
  </n-result>
</template>

<script lang="ts" setup>
// import { ref } from 'vue'
// import { useCurrentUser, User } from '../composables'
import { useMessage } from 'naive-ui'

const message = useMessage()

const handleClick = (): void => {
  message.success('Just So So')
  // const {  } = useCurrentUser()
}
</script>

<style scoped>
.n-result {
  margin: 10vh 0;
}
</style>
