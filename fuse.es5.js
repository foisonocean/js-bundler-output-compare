const { FuseBox, QuantumPlugin } = require('fuse-box')

FuseBox
  .init({
    homeDir : "src",
    target : 'browser@es5',
    output : "output/fuse-es5/$name.js",
    plugins : [
      QuantumPlugin({
        uglify: false,
        treeshake : true,
      }),
    ]
  })
  .bundle("bundle.js")
  .instructions('>index.js')
  .fuse.run()
