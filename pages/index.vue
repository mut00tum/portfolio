<template>
  <section id="pageIndex">
    <ul>
      <li>
        <nuxt-link to="/work/shoedog">
          <img
            src="~/assets/img/001_main.jpg"
            width="1060"
            height="622"
            alt="SHOEDOGのメインビジュアル"
          />
          <h2>SHOE DOG</h2>
          <p class="tag">Web/Art Direction, UI/UX Design, Copywriting</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work/textbook">
          <img
            src="~/assets/img/003_main.jpg"
            width="1060"
            height="622"
            alt="教科書の森のメインビジュアル"
          />
          <h2>教科書の森</h2>
          <p class="tag">Project Management, Web/ArtDirection, UI/UX Design</p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work/mailingbook">
          <img
            src="~/assets/img/002_main.jpg"
            width="1060"
            height="622"
            alt="メーリングブックのメインビジュアル"
          />
          <h2>メーリングブック</h2>
          <p class="tag">
            Web/Art Direction, UI/UX Design, Front-end Development
          </p>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/work/lifeshift">
          <img
            src="~/assets/img/004_main.jpg"
            width="1060"
            height="622"
            alt="LIFE SHIFTのメインビジュアル"
          />
          <h2>LIFE SHIFT</h2>
          <p class="tag">Web/Art Direction, UI/UX Design</p>
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
/*-----------------------------------------------------------------------*/
/* pageIndex
/*-----------------------------------------------------------------------*/
#pageIndex {
  padding: 0 10px;
  margin: 0 auto 60px;
  @include min($tablet) {
    padding: 0 20px;
  }
  @include min($pc) {
    max-width: $pc;
    // padding: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-bottom: 30px;
      @include min($tablet) {
        width: calc(50% - 20px);
        margin-bottom: 40px;
        &:nth-child(2n + 1) {
          margin-right: 40px;
        }
      }
      img {
        @include boxRound;
        @include fitImg;
        margin-bottom: 10px;
        transition: easing(hide);
        &:hover {
          transition: easing(onmouse);
          transform: translateY(-3px);
          @include hoverShadow;
        }
      }
      h2 {
        display: inline;
        @include index-h2;
        &:hover {
          color: palettes(letter, light);
        }
        @include min($tablet) {
          @include index-h2(15px);
        }
      }
      .tag {
        @include index-tag;
      }
    }
  }
}
</style>
