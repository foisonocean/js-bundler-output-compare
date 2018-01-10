const { FuseBox, QuantumPlugin } = require('fuse-box')

FuseBox
  .init({
    homeDir : "src",
    target : 'browser@es5',
    output : "output/fuse-es5-uglify/$name.js",
    plugins : [
      QuantumPlugin({
        uglify: true,
        treeshake : true,
      }),
    ]
  })
  .bundle("bundle.js")
  .instructions('>index.js')
  .fuse.run()
