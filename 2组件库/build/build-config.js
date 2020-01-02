const fs = require('fs')
const path = require('path')
const postcssrc = require('postcss-load-config')
// 告诉rollup如何查找外部模块
const resolve = require('rollup-plugin-node-resolve')
// 将cjs转成esm
const commonjs = require('rollup-plugin-commonjs')
// 转化.vue文件
const vue = require('rollup-plugin-vue')
const babel = require('rollup-plugin-babel')
const postcss = require('rollup-plugin-postcss')
const progress = require('rollup-plugin-progress')
const filesize = require('rollup-plugin-filesize')
const colors = require('colors')
const boxen = require('boxen')

const postcssConfig = postcssrc.sync()

// 可以读取.json文件
const json = require('rollup-plugin-json')
const pkg = require('../package.json')

const bannerText = `/*! bxs-vue-ui v${pkg.version} */`

const getEntries = () => {
  let _entries = {}
  const dirs = fs.readdirSync(path.resolve(__dirname, '../packages/'))
  const excludes = [
    '.DS_Store',
    'utils',
    'mixins',
    'index.js',
    'index.css',
    'style',
  ]
  dirs.filter(dir => excludes.indexOf(dir) === -1).forEach(dir => {
    _entries[dir] = `packages/${dir}`
  })
  return _entries
}

const getPostcssConfig = (extract) => {
  const postcssConfig = {}
  postcssConfig.plugins = postcssConfig.plugins
  if (extract) {
    postcssConfig.extract = extract
  }
  return postcssConfig
}

const getInputOptions = (options, config = {}) => {
  return {
    external: ['vue', 'better-scroll'],
    plugins: [
      resolve({
        extensions: ['.vue', '.js']
      }),
      commonjs(),
      vue({
        css: false,
        style: {
          postcssPlugins: postcssConfig.plugins
        },
        template: {
          isProduction: true,
          compilerOptions: {
            preserveWhitespace: false
          }
        },
      }),
      postcss(getPostcssConfig(config.extract)),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      json(),
      // progress(),
      filesize({
        render (options, bundle, { fileName, minSize, gzipSize, bundleSize}) {
          const value = [
            `${colors.green('Bundle Name:')} ${bundle.dir} - ${fileName}`,
            `${colors.green('Bundle Size:')} ${bundleSize}`,
            `${colors.green('Minified Size:')} ${minSize}`,
            `${colors.green('Gzipped Size:')} ${gzipSize}`,
          ]
          return boxen(value.join('\n'), { padding: 1 })
        }
      })
    ],
    ...options
  }
}

const getOutputOptions = (options) => {
  return {
    exports: 'named',
    banner: bannerText,
    globals: {
      vue: 'Vue',
      'better-scroll': 'BScroll',
    },
    ...options
  }
}

module.exports = {
  getEntries,
  getInputOptions,
  getOutputOptions,
  postcss,
  postcssConfig
}
