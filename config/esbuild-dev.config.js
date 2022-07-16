const EsbuildConfig = require('esbuild')

const path = require('path');


EsbuildConfig.serve({
    entryPoints: [path.resolve(__dirname,'..' , 'src' )],
    outdir: path.resolve(__dirname, '..', 'dist'),
    entryNames: 'index',
    loader: {".ts": "ts"},
})

