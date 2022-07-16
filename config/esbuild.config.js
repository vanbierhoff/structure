const EsbuildConfig = require('esbuild')

const path = require('path');


EsbuildConfig.build({
    entryPoints: [path.resolve(__dirname,'..' , 'src' )],
    outdir: path.resolve(__dirname, '..', 'dist'),
    entryNames: 'index',
    bundle: true,
    loader: {".ts": "ts"}
})

