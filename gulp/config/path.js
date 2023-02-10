import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    sprites: `${buildFolder}/img/sprite/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srcFolder}/js/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    svgSpriteIcons: `${srcFolder}/img/icons/*.svg`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,

    scssNewsPage: `${srcFolder}/scss/styleNewsPage.scss`,
    scssTermsConditions: `${srcFolder}/scss/styleTermsConditions.scss`,
    scssPrivacyPolicy: `${srcFolder}/scss/stylePrivacyPolicy.scss`,
    scssNewsAllPage: `${srcFolder}/scss/styleNewsAllPage.scss`,
    scssAnalyticsAllPage: `${srcFolder}/scss/styleAnalyticsAllPage.scss`,
    scssDappPage: `${srcFolder}/scss/styleDappPage.scss`
  },
  watch: {
    assetscss: `${srcFolder}/assets/**/*.css`,
    assetsjs: `${srcFolder}/assets/**/*.js`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    sprite: `${srcFolder}/img/icon/*.svg`,
    files: `${srcFolder}/files/**/*.*`,

    scssNewsPage: `${srcFolder}/scss/**/*.scss`,
    scssTermsConditions: `${srcFolder}/scss/**/*.scss`,
    scssPrivacyPolicy: `${srcFolder}/scss/**/*.scss`,
    scssNewsAllPage: `${srcFolder}/scss/**/*.scss`,
    scssAnalyticsAllPage: `${srcFolder}/scss/**/*.scss`,
    scssDappPage: `${srcFolder}/scss/**/*.scss`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: ``
}