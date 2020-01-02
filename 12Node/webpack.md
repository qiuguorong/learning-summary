## Webpack

## 插件
### webpack.NamedModulesPlugin
这个插件的作用是在热加载时直接返回更新文件名，而不是文件的id，在「optimization」中配置
### webpack.NamedChunksPlugin
把 chunk id 变为一个字符串标识符，这个字符包一般就是模块的相对路径。这样模块的 chunk id 就可以稳定下来，在「optimization」中配置
### webpack.HashedModuleIdsPlugin
把根据模块相对路径生成的 hash 作为 chunk id，这样 chunk id 会更短。因此在生产中更推荐用 HashedModuleIdsPlugin
### webpack.HotModuleReplacementPlugin
启用HMR
### webpack.NoEmitOnErrorsPlugin
在webpack4中自动启用，在「optimization」中的「noEmitOnErrors」配置
### webpack.optimize.ModuleConcatenationPlugin
enable scope hoisting，在「optimization」中配置