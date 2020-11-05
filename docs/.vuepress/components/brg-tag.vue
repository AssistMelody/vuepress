<template>
  <div v-if="tagText" :class="['tag',size,tagType]">
    {{ tagText }}
  </div>
</template>

<script>
export default {
  name: 'BrgTag',
  props: {
    tagType: {
      type: String,
      default: '',
    },
    tagText: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'small',
    },
  },
};
</script>

<style lang="scss" scoped>
  $user-tag-icon: 'https://img.goshare2.com/app-images/mini-app/user-tag.png';
  $coupon-tag-icon: 'https://img.goshare2.com/app-images/bonus_right.png';
  .tag{
    display: flex;
    align-items: center;
    width: fit-content;
    font-family: PingFangSC-Medium;
    box-sizing: border-box;
    white-space: nowrap;
    &.brand{
      background: #333333;
      border: 2px solid #333333;
      border-radius: 4px;
      color: #fff;
    }
    &.user{
      padding-left: 8px;
      padding-right: 38px;
      display: flex;
      align-items: center;
      border-radius: 16px;
      color: #fff;
      font-size: 18px;
      white-space: nowrap;
      background: rgba(0, 0, 0, 0.5) url($user-tag-icon) center right no-repeat;
      background-size: contain;
    }
    &.coupon{
      padding-right: 4px;
      background: linear-gradient(267.77deg, #f7617f 0%, #ff7469 97.66%);
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      color: #fff;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -4px;
        background: url($coupon-tag-icon) center no-repeat;
        width: 6px;
        height: 100%;
        background-size: 100% 100%;
      }
    }
    &.market{
      background: linear-gradient(267.77deg, #f7617f 0%, #ff7469 97.66%);
      border-radius: 2px;
      color: #fff;
    }
    &.size,&.quality{
      background: #ffffff;
      border: 2px solid #f3bc44;
      border-radius: 4px;
      color: #f3bc44;
    }
    &.reduce{
      padding: 0 8px;
      color: #FF7469;
      background: linear-gradient(0deg, rgba(255, 116, 105, 0.1), rgba(255, 116, 105, 0.1));
      border: 1px solid #FF7469;
      border-radius: 16px;
    }
    &.store{
      padding: 0 8px;
      color: #333;
      font-weight: 600;
      background-color: #fff;
      border: 2px solid #333;
      border-radius: 4px;
    }
    &.source{
      padding: 0 8px;
      color: #333;
      font-weight: 600;
      background-color: #fff;
      border: 2px solid #333;
      border-radius: 16px;
    }
  }
  .small {
    height: 29px;
    padding: 0 6px;
    font-size: 20px;
  }
  .middle {
    height: 32px;
    padding: 0 8px;
    font-size: 24px;
  }
</style>
