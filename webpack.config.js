const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "toDoApp",
    publicPath: "/toDoApp/",
    //path: path.resolve(__dirname, "dist/to-do-app/toDoApp")
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "toDoApp",
        filename: "remote-toDoApp.js", //filename is of your choice
        exposes: {
            './myToDoModule': './src/app/to-do/to-do.module.ts'
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "http://localhost:3000/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "module-federation-config-lib": {
            singleton: true,
            strictVersion: true, 
            requiredVersion: 'auto'
        },
          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
