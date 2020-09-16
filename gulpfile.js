const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish')
const parallelize = require('concurrent-transform')

const config = {
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v3'
  },

  deleteOldVersions: false,
  distribution: process.env.AWS_CLOUDFRONT,
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    /* 'Cache-Control': 'max-age=315360000, no-transform, public', */
  },
  distDir: 'dist',
  indexRootPath: true,
  cacheFileName: '.awspublish',
  concurrentUploads: 10,
  wait: true
}

gulp.task('deploy', function () {
  const publisher = awspublish.create(config)
  let g = gulp.src('./' + config.distDir + '/**')
  g = g.pipe(
    parallelize(publisher.publish(config.headers), config.concurrentUploads)
  )
  if (config.distribution) {
    console.log('Configured with CloudFront distribution')
    g = g.pipe(cloudfront(config))
  } else {
    console.log(
      'No CloudFront distribution configured - skipping CDN invalidation'
    )
  }
  if (config.deleteOldVersions) {
    g = g.pipe(publisher.sync())
  }
  g = g.pipe(publisher.cache())
  g = g.pipe(awspublish.reporter())
  return g
})
