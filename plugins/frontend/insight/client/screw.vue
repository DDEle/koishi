<template>
  <div class="screw above" :class="placement"></div>
  <div class="screw below" :class="placement"></div>
</template>

<script lang="ts" setup>

defineProps<{
  placement: 'left' | 'right'
}>()

</script>

<style lang="scss" scoped>

$outer-size: 16px;
$inner-size: 6px;

.screw {
  position: absolute;
  top: 50%;
  width: $outer-size;
  height: $outer-size;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--card-bg);
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &.left {
    left: 0;
    border-left: 1px solid var(--border);
  }

  &.right {
    right: -1rem;
    border-right: 1px solid var(--border);
  }

  &.above {
    z-index: 10;
  }

  &.above::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: $inner-size;
    height: $inner-size;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--bg4);
    transition: background-color 0.3s ease;

    .node.active & {
      background-color: var(--primary);
    }
  }

  &.below {
    z-index: -10;
    box-shadow: var(--card-shadow);
  }

  .node-container.active .node:not(.active) & {
    background-color: var(--page-bg);
    &.below {
      box-shadow: unset;
    }
  }
}

</style>
