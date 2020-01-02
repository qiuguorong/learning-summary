const rollup = require('rollup')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const chalk = require('chalk')
const glob = require('glob')
const config = require('./build-config')
const postcss = require('postcss')

const getEntries = config.getEntries
const getInputOptions = config.getInputOptions
const getOutputOptions = config.getOutputOptions
const postcssConfig = config.postcssConfig

const [CJSDIR, ESMDIR, UMDDIR] = ['lib', 'esm', 'umd']

let entries = getEntries()

const buildCJS = async function () {
  console.log(chalk.cyan('开始构建 CJS 主模块...\n'))
  const bundle = await rollup.rollup(getInputOptions({
    input: {
      index: 'src/index'
    }
  }, {
    extract: `${CJSDIR}/index.css`
  }))
  await bundle.write(getOutputOptions({
    format: 'cjs',
    dir: CJSDIR,
    entryFileNames: 'index.js'
  }))
}

const buildComponentsCJS = async function () {
  console.log(chalk.cyan('开始构建 CJS 组件模块...\n'))
  const bundle = await rollup.rollup(getInputOptions({
    input: {
      ...entries
    }
  }, {
    extract: `${CJSDIR}/index.css`
  }))
  await bundle.write(getOutputOptions({
    format: 'cjs',
    dir: CJSDIR,
    entryFileNames: '[name]/index.js',
    chunkFileNames: 'utils/[name].js'
  }))
}

const buildESM = async function () {
  console.log(chalk.cyan('开始构建 ESM 主模块...\n'))
  const bundle = await rollup.rollup(getInputOptions({
    input: {
      index: 'src/index'
    }
  }, {
    extract: `${ESMDIR}/index.css`
  }))
  await bundle.write(getOutputOptions({
    format: 'esm',
    dir: ESMDIR,
    entryFileNames: 'index.js'
  }))
}

const buildComponentsESM = async function () {
  console.log(chalk.cyan('开始构建 ESM 组件模块...\n'))
  const bundle = await rollup.rollup(getInputOptions({
    input: {
      ...entries
    }
  }, {
    extract: `${CJSDIR}/index.css`
  }))
  await bundle.write(getOutputOptions({
    format: 'esm',
    dir: ESMDIR,
    entryFileNames: '[name]/index.js',
    chunkFileNames: 'utils/[name].js'
  }))
}

const buildUMD = async function () {
  console.log(chalk.cyan('开始构建 UND 主模块...\n'))
  const bundle = await rollup.rollup(getInputOptions({
    input: {
      index: 'src/index'
    }
  }, {
    extract: `${UMDDIR}/index.css`,
  }))
  await bundle.write(getOutputOptions({
    format: 'umd',
    dir: UMDDIR,
    entryFileNames: 'index.js',
    name: 'bxs'
  }))
}

const buildComponentsUMD = async function () {
  console.log(chalk.cyan('开始构建 UND 组件模块\n'))
  await Promise.all(Object.keys(entries).map(async key => {
    let bundle = await rollup.rollup(getInputOptions({
      input: {
        [key]: entries[key]
      }
    }, {
      extract: `${UMDDIR}/${key}/index.css`
    }))
    await bundle.write(getOutputOptions({
      format: 'umd',
      dir: UMDDIR,
      entryFileNames: `${key}/index.js`,
      name: 'bxs'
    }))
  }))
}

const postcssCompiler = function (sourcePath, targetPath) {
  return new Promise(resolve => {
    fs.readFile(sourcePath, (err, css) => {
      postcss(postcssConfig.plugins).process(css, { from: sourcePath}).then(result => {
        fs.writeFile(targetPath, result.css, () => {
          resolve(result.css)
        })
      })
    })
  })
}

const buildCSS = function () {
  console.log(chalk.cyan('开始处理css... \n'))
  glob(`./${UMDDIR}/**/*.css`, (err, files) => {
    files.forEach(filepath => {
      if (filepath.indexOf(`${UMDDIR}/index.css`) !== -1) {
        postcssCompiler(filepath, filepath).then(css => {
          fs.writeFile(`${CJSDIR}/index.css`, css, () => true)
          fs.writeFile(`${ESMDIR}/index.css`, css, () => true)
        })
      } else {
        const chunk = path.basename(path.dirname(filepath))
        postcssCompiler(filepath, filepath).then(css => {
          fs.writeFile(`${CJSDIR}/${chunk}/index.css`, css, () => true)
          fs.writeFile(`${ESMDIR}/${chunk}/index.css`, css, () => true)
        })
      }
    })
  })
}

async function buildAll () {
  rimraf.sync(CJSDIR)
  rimraf.sync(ESMDIR)
  rimraf.sync(UMDDIR)
  await buildCJS()
  await buildComponentsCJS()
  await buildESM()
  await buildComponentsESM()
  await buildUMD()
  await buildComponentsUMD()
  await buildCSS()
}

buildAll()
