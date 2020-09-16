<template>
  <div id="about" class="contents">
    <div class="main">
      <div class="image">
        <img
          src="~/assets/img/about/about_profile.jpg"
          width="240"
          height="240"
          alt="プロフィール写真"
        />
        <h1 class="name">Koji Muto</h1>
      </div>
    </div>
    <div class="job">
      <h2 class="roll">Designer</h2>
      <p class="sub">- Digital Product, UI/UX, System</p>
      <p class="lead">
        コンサルティングファームにてデジタルプラットフォーム構築とUI/UX改善に取り組んでいます。<br /><br />
        グラフィックデザイナーからキャリアをスタートし、Webデザイナー、Webディレクターを経験。Webディベロッパーとしてフロントエンド、バックエンドの開発も担当してきました。
        海外デザイン拠点の立ち上げ時には、アートディレクターとして現地デザイナーへの教育も行いました。<br /><br />
        デザインを軸にユーザー視点からの企画立案と施策実行を得意としています。<br />
        マーケティング・デザイン・システム間の連携を円滑に行えます。
      </p>
    </div>
    <div class="biography">
      <h3>略歴</h3>
      <dl class="history">
        <dt>
          <a
            href="https://www.accenture.com/jp-ja"
            target="_blank"
            rel="noopener noreferrer"
            >アクセンチュア株式会社</a
          >
          <span class="info">2019 -</span>
        </dt>
        <dd>
          デジタルプラットフォーム構築におけるソフトウェアデザイン、UI/UX改善に従事。
        </dd>
        <dt>
          <a
            href="https://corp.toyokeizai.net/"
            target="_blank"
            rel="noopener noreferrer"
            >東洋経済新報社</a
          >
          <span class="info">2016 - 2019</span>
        </dt>
        <dd>
          デジタルマーケティング部門にてWebディレクションとプロモーションクリエイティブを担当。新規事業開発やデジタルプラットフォーム構築プロジェクト、Webサービスの立ち上げなどにも携わる。
        </dd>
        <dt>
          <a
            href="https://www.graphic.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
            >株式会社グラフィック</a
          >
          <span class="info">2008 - 2016</span>
        </dt>
        <dd>
          広告、エディトリアルデザインの経験を積んだ後、Web部門に転向。大手クライアントのリクルートサイト・Saas・エンタメ・教育機関など、企業の顔となる案件を多数手掛ける。
        </dd>
      </dl>
    </div>
  </div>
</template>
<style lang="scss">
/*-----------------------------------------------------------------------*/
/* about
/*-----------------------------------------------------------------------*/
#about {
  margin-bottom: 80px;
  .main {
    text-align: center;
    height: 110px;
    margin-bottom: 80px;
    background: url(~assets/img/about/about_bg.jpg) repeat-x;
    background-size: contain;
    @include min($tablet) {
      height: 200px;
      margin-bottom: 115px;
    }
    .image {
      padding-top: 80px;
      margin-bottom: 80px;
      @include min($tablet) {
        padding-top: 160px;
      }
      img {
        width: 62px;
        height: 62px;
        margin-bottom: 10px;
        border-radius: 50%;
        border: 4px solid #fff;
        @include min($tablet) {
          width: 96px;
          height: 96px;
          border: 6px solid #fff;
        }
      }
    }
    h1.name {
      font-size: 12px;
      font-weight: normal;
      @include min($tablet) {
        font-size: 14px;
      }
    }
  }

  .job,
  .biography {
    padding: 0 16px;
    @include min($tablet) {
      max-width: 720px;
      margin: 0 auto;
      padding: 0 20px;
    }
  }
  .job {
    text-align: center;
    margin-bottom: 40px;
    h2.roll {
      font-size: 30px;
      margin-bottom: 0;
    }
    .sub {
      font-size: 12px;
      margin-bottom: 40px;
    }
    @include min($tablet) {
      margin-bottom: 60px;
      h2.roll {
        font-size: 42px;
      }
      .sub {
        margin-bottom: 60px;
        font-size: 14px;
      }
    }
  }
  .biography {
    h3 {
      font-size: 16px;
      margin-bottom: 30px;
    }
    @include min($tablet) {
      h3 {
        font-size: 20px;
      }
    }
    dl.history {
      dt {
        margin-bottom: 10px;
        a {
          font-size: 14px;
          font-weight: bold;
          text-decoration: underline;
        }
        span {
          padding-left: 5px;
          font-size: 12px;
          color: $color-tag;
        }
      }
      dd {
        margin-bottom: 20px;
        font-size: 13px;
      }
      @include min($tablet) {
        dt a {
          font-size: 16px;
        }
        dd {
          margin-bottom: 40px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
