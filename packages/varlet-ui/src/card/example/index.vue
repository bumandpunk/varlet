<template>
  <app-type>{{ pack.basicUsage }}</app-type>
  <var-card :title="pack.title" :description="pack.description" />
  <app-type>{{ pack.showSubtitle }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" />
  <app-type>{{ pack.showImage }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  />
  <app-type>{{ pack.useSlot }}</app-type>
  <var-card
    :title="pack.title"
    :subtitle="pack.subtitle"
    :description="pack.description"
    src="https://varlet.gitee.io/varlet-ui/cat.jpg"
  >
    <template #extra>
      <var-button type="primary" style="margin-right: 10px">{{ pack.button }}</var-button>
      <var-button type="warning">{{ pack.button }}</var-button>
    </template>
  </var-card>
  <app-type>{{ pack.showRipple }}</app-type>
  <var-card :title="pack.title" :subtitle="pack.subtitle" :description="pack.description" ripple />
</template>

<script>
import AppType from '@varlet/cli/site/mobile/components/AppType'
import VarButton from '../../button'
import VarCard from '..'
import dark from '../../themes/dark'
import { pack, use } from './locale'
import { watchLang, watchDarkMode } from '@varlet/cli/site/utils'

export default {
  name: 'CardExample',
  components: {
    VarButton,
    VarCard,
    AppType,
  },
  setup() {
    watchLang(use)
    watchDarkMode(dark)

    return {
      pack,
    }
  },
}
</script>

<style scoped>
.example {
  background: antiquewhite;
}
</style>
