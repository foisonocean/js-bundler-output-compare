const { FuseBox, QuantumPlugin } = require('fuse-box')

FuseBox
  .init({
    homeDir : "src",
    target : 'browser',
    output : "output/fuse/$name.js",
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
