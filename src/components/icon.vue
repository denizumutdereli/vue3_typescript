<template>
  <n-icon v-bind="props"><icon /></n-icon>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import {
  RefreshOutline as refresh,
  SpeedometerOutline as dashboard,
  HelpCircleOutline as help,
  NotificationsOutline as notifications,
  LogoGithub as github,
  AlertCircleOutline as fallback
} from '@vicons/ionicons5'

const icons = { refresh, dashboard, help, notifications, github, fallback }

type IconTypes = keyof typeof icons

const props = defineProps({
  ...NIcon.props,
  type: {
    type: String,
    default: 'fallback'
  }
})

const icon = icons[props.type as IconTypes]
</script>
