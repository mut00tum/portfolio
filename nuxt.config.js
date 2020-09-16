export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'Koji Muto Portfolio',
    meta: [{
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'デザイナーKoji Mutoのポートフォリオサイト.プロダクト,UI/UX,ソフトウェアのデザイナー.ユーザー視点での企画立案と施策実行が得意',
      },
      {
        property: 'og:site_name',
        content: 'Koji Muto Portfolio',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Koji Muto Portfolio',
      },
      {
        property: 'og:description',
        content: 'デザイナーKoji Mutoのポートフォリオサイト.プロダクト,UI/UX,ソフトウェアのデザイナー.ユーザー視点での企画立案と施策実行が得意',
      },
      {
        property: 'og:url',
        content: 'https://koji-muto.me',
      },
      {
        property: 'og:image',
        content: 'https://koji-muto.me/ogp.png',
      },
      {
        property: 'fb:app_id',
        content: '338478070832496',
      },
      {
        property: 'og:locale',
        content: 'ja_JP',
      },
      {
        name: 'twitter:card',
        content: 'summary|summary_large_image',
      },
      {
        name: 'twitter:site',
        content: '@mutooden',
      },
      {
        name: 'twitter:creator',
        content: '@mutooden',
      },
      {
        name: 'twitter:description',
        content: 'デザイナーKoji Mutoのポートフォリオサイト.プロダクト,UI/UX,ソフトウェアのデザイナー.ユーザー視点での企画立案と施策実行が得意',
      },
      {
        name: 'twitter:title',
        content: 'Koji Muto Portfolio',
      },
      {
        name: 'twitter:url',
        content: 'https://koji-muto.me',
      },
      {
        name: 'twitter:image',
        content: 'https://koji-muto.me/ogp.png',
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    }, ],
  },
  css: ['~/assets/css/reset.css', '~/assets/sass/common.scss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/style-resources', 'nuxt-webfontloader'],
  styleResources: {
    scss: ['./assets/sass/_mixins.scss'],
  },
  webfontloader: {
    families: ['Lato:400,700'],
  },
  build: {},
}
