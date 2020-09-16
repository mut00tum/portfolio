<template>
  <div id="all">
    <header id="header">
      <div class="wrap">
        <h1>
          <a href="/">Koji Muto</a>
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <nuxt-link to="/">Work</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <Nuxt />
    <footer id="footer">
      <ul>
        <li>
          <a href="https://github.com/mut00tum" target="_blank" rel="noopener">
            <img
              src="~/assets/img/common/icon_github.svg"
              width="64"
              height="64"
              alt="GitHubリンク"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/mutooden" target="_blank" rel="noopener">
            <img
              src="~/assets/img/common/icon_twitter.svg"
              width="64"
              height="64"
              alt="Twitterリンク"
            />
          </a>
        </li>
        <li>
          <a href="https://qiita.com/oden" target="_blank" rel="noopener">
            <img
              src="~/assets/img/common/icon_qiita.svg"
              width="64"
              height="64"
              alt="Qiitaリンク"
            />
          </a>
        </li>
      </ul>
      <div class="copyright">
        <small
          >&copy; 2020 All rights reserved. – Designed &amp;
          <a href="">Coded</a> by Koji Muto</small
        >
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
/*-----------------------------------------------------------------------*/
/* All
/*-----------------------------------------------------------------------*/
#all {
  // display: flex;
  // flex-direction: column;
  // min-height: 100vh;
}

/*-----------------------------------------------------------------------*/
/* Header
/*-----------------------------------------------------------------------*/
#header {
  height: 40px;
  padding: 0 10px 20px;
  @include min($tablet) {
    padding: 0 20px 40px;
  }
  @include min($pc) {
    max-width: $pc;
    margin: 0 auto;
  }
  .wrap {
    position: fixed;
    width: calc(100% - 20px);
    padding-top: 12px;
    display: flex;
    justify-content: space-between;
    z-index: 100;
    // background-color: #fff;
    @include min($tablet) {
      width: calc(100% - 40px);
      padding-top: 20px;
    }
    @include min($pc) {
      max-width: $pc;
    }
    h1 {
      font-size: 15px;
      @include min($tablet) {
        font-size: 18px;
      }
      a {
        transition: easing(show);
        color: palettes(letter);
        &:hover {
          color: palettes(letter, light);
        }
      }
    }
    #nav {
      font-size: 12px;
      @include min($tablet) {
        font-size: 14px;
      }
      ul {
        display: flex;
        align-items: center;
      }
      li {
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
        a {
          transition: easing(show);
          color: palettes(letter);
          &:hover {
            color: palettes(letter, light);
          }
        }
      }
    }
  }
}
/*-----------------------------------------------------------------------*/
/* Footer
/*-----------------------------------------------------------------------*/
#footer {
  width: 100%;
  padding: 36px 0 20px;
  background: $color-footer-bg;
  ul {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    li {
      margin-right: 24px;
      &:last-child {
        margin-right: 0;
      }
      a img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .copyright {
    clear: both;
    text-align: center;
    small,
    a {
      font-size: 10px;
      color: $color-footer-caption;
      @include min($tablet) {
        font-size: 11px;
      }
    }
  }
}
</style>
