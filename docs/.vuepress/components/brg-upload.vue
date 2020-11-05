<template>
  <div class="upload" @click="select">
    <img v-if="required" class="upload-require" src="https://img.goshare2.com/app-images/mp_require_2x.png">
    <div class="upload-mark" :class="{hold:holdImg}" :style="{'--hold-img': `url(${holdImg})`}">
      <span class="add">+</span>
    </div>
    <div class="upload-select">
      <img v-if="url" :src="url" mode="aspectFill">
    </div>
    <div v-show="url" class="upload-delete" @click.stop="deleteSelect">
      <img class="close" src="https://img.goshare2.com/app-images/delete_img_2x.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrgUpload',
  props: {
    imgUrl: {
      type: String,
      default: '',
    },
    holdImg: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      url: this.imgUrl,
    };
  },
  watch: {
    imgUrl (val) {
      console.log(val);
      this.url = val;
    },
  },
  methods: {
    select() {
      uni.showActionSheet({
        itemList: ['拍摄', '从手机相册选择'],
        success: (res) => {
          uni.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: [res.tapIndex === 0 ? 'camera' : 'album'],
            success: async (e) => {
              this.url = e.tempFilePaths[0];
              this.$emit('selectChange', e.tempFiles[0]);
            },
          });
        },
      });
    },
    deleteSelect() {
      this.url = '';
      this.$emit('delete');
    },
  },
};
</script>

<style scoped lang="scss" >
  @mixin BasePosition{
    position: absolute;
    left: 0;
    top: 0;
  }
  .upload {
    width: 186px;
    height: 186px;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
    position: relative;
    &-require{
      @include BasePosition;
      width: 76px;
      height: 38px;
      z-index: 399;
    }
    &-mark{
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed #457F7C;
      box-sizing: border-box;
      .add{
        font-size: 38px;
        color: #457F7C;
      }
      &.hold{
        background-image: var(--hold-img);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border: none;
        .add{
          color: #fff;
          position: relative;
          z-index: 199;
        }
        &::after{
          content: '';
          @include BasePosition();
          z-index: 99;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }
      }
    }
    &-select{
      @include BasePosition;
      width: 100%;
      height: 100%;
      z-index: 299;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-delete{
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%,-50%);
      width: 48px;
      height: 48px;
      z-index: 499;
      .close{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
