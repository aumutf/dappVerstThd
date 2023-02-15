import gulp from "gulp";

import { path } from "./gulp/config/path.js"
import { plugins } from "./gulp/config/plugins.js"

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins
}


import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { svgSpriteTask } from "./gulp/tasks/svg_sprite.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { copyCss, copyJs } from "./gulp/tasks/assets.js";

import { scssNewsPage } from "./gulp/tasks/scssNewsPage.js";
import { scssTermsConditions } from "./gulp/tasks/scssTermsConditions.js";
import { scssPrivacyPolicy } from "./gulp/tasks/scssPrivacyPolicy.js";
import { scssNewsAllPage } from "./gulp/tasks/scssNewsAllPage.js";
import { scssAnalyticsAllPage } from "./gulp/tasks/scssAnalyticsAllPage.js";
import { scssDappPage } from "./gulp/tasks/scssDappPage.js";
import { scssCoinPage } from "./gulp/tasks/scssCoinPage.js";
import { scssExchangePage } from "./gulp/tasks/scssExchangePage.js";

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.files, copy)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
  gulp.watch(path.watch.sprite, svgSpriteTask)
  gulp.watch(path.watch.assetsjs, copyJs)
  gulp.watch(path.watch.assetscss, copyCss)

  gulp.watch(path.watch.scssNewsPage, scssNewsPage)
  gulp.watch(path.watch.scssTermsConditions, scssTermsConditions)
  gulp.watch(path.watch.scssPrivacyPolicy, scssPrivacyPolicy)
  gulp.watch(path.watch.scssNewsAllPage, scssNewsAllPage)
  gulp.watch(path.watch.scssAnalyticsAllPage, scssAnalyticsAllPage)
  gulp.watch(path.watch.scssDappPage, scssDappPage)
  gulp.watch(path.watch.scssCoinPage, scssCoinPage)
  gulp.watch(path.watch.scssExchangePage, scssExchangePage)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);
const assets = gulp.series(copyJs, copyCss);
// Основные задачи

const mainTasks = gulp.series(fonts, gulp.parallel(
  copy, html, scss, js, images, svgSpriteTask,
  scssNewsPage,
  scssTermsConditions,
  scssPrivacyPolicy,
  scssNewsAllPage,
  scssAnalyticsAllPage,
  scssDappPage,
  scssCoinPage,
  scssExchangePage,
  assets
));


// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Выполнение сценария по умолчанию
gulp.task('default', dev);