<template>
  <div class="var-list var--box" ref="listEl">
    <slot />

    <slot name="loading" v-if="loading">
      <div class="var-list__loading">
        <div class="var-list__loading-text">{{ dt(loadingText, pack.listLoadingText) }}</div>
        <var-loading size="mini" :radius="10" />
      </div>
    </slot>

    <slot name="finished" v-if="finished">
      <div class="var-list__finished">{{ dt(finishedText, pack.listFinishedText) }}</div>
    </slot>

    <slot name="error" v-if="error">
      <div class="var-list__error" v-ripple @click="load">
        {{ dt(errorText, pack.listErrorText) }}
      </div>
    </slot>

    <div class="var-list__detector" ref="detectorEl"></div>
  </div>
</template>

<script lang="ts">
import VarLoading from '../loading'
import Ripple from '../ripple'
import { defineComponent, onMounted, onUnmounted, ref, nextTick } from 'vue'
import { getParentScroller, toPxNum } from '../utils/elements'
import { props } from './props'
import { isNumber, dt } from '../utils/shared'
import { pack } from '../locale'
import type { Ref } from 'vue'

export default defineComponent({
  name: 'VarList',
  directives: { Ripple },
  components: {
    VarLoading,
  },
  props,
  setup(props) {
    const listEl: Ref<HTMLElement | null> = ref(null)
    const detectorEl: Ref<HTMLElement | null> = ref(null)
    let scroller: HTMLElement | Window

    const load = () => {
      props['onUpdate:error']?.(false)
      props['onUpdate:loading']?.(true)
      props.onLoad?.()
    }

    const isReachBottom = () => {
      const containerBottom =
        scroller === window ? window.innerHeight : (scroller as HTMLElement).getBoundingClientRect().bottom

      const { bottom: detectorBottom } = (detectorEl.value as HTMLElement).getBoundingClientRect()

      // The fractional part of the detectorBottom when bottoming out overflows
      // https://github.com/varletjs/varlet/issues/310
      return Math.floor(detectorBottom) - toPxNum(props.offset) <= containerBottom
    }

    // expose
    const check = async () => {
      await nextTick()

      const { loading, finished, error } = props

      if (!loading && !finished && !error && isReachBottom()) {
        load()
      }
    }

    onMounted(() => {
      scroller = getParentScroller(listEl.value as HTMLElement)

      props.immediateCheck && check()

      scroller.addEventListener('scroll', check)
    })

    onUnmounted(() => {
      scroller.removeEventListener('scroll', check)
    })

    return {
      pack,
      listEl,
      detectorEl,
      dt,
      isNumber,
      load,
      check,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../ripple/ripple';
@import '../loading/loading';
@import './list';
</style>
