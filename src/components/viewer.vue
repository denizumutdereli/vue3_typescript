<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useLoadingBar } from 'naive-ui'
import router from '../router'

// transision

const loadingBar = useLoadingBar()

router.beforeEach(() => loadingBar?.start())

router.afterEach(() => loadingBar?.finish())
</script>