<template>
  <div class="contain" :class="{open: value}" @click="select">
    <div class="switch" />
  </div>
</template>

<script>

export default {
  name: 'BrgSwitch',
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select() {
      this.$emit('update:value', !this.value);
      this.$emit('change', !this.value);
    },
  },
};
</script>

<style lang="scss" scoped >
  .contain{
    --contain-width:80px;
    width: var(--contain-width);
    height: 32px;
    position: relative;
    border-radius: 62px;
    background-color: rgba(153, 153, 153, 0.2);
    transition: background-color 300ms linear;
    .switch{
      --switch-width:48px;
      position: absolute;
      top: 50%;
      left: 0;
      right: unset;
      transform: translateY(-50%);
      width: var(--switch-width);
      height: 48px;
      border-radius: 50%;
      background-color: #999;
      box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 6px 6px rgba(0, 0, 0, 0.05);
      transition: all 300ms linear;
    }
    &.open{
      background-color: rgba(69, 127, 124, 0.2);
      .switch{
        background-color: #457F7C;
        left: calc(var(--contain-width) - var(--switch-width));
      }
    }
  }
</style>
