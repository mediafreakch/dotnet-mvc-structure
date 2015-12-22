# Goals

This repository shows a best practice example of how to setup FrontendComponents within a .NET MVC solution.

## Arguments

### Why FrontendComponents should not be used in `Areas`

- `Areas` are a way to structure the Server Side application. A FrontendComponent doesn't necessarily belong to a single Area, it could belong to many.
That would quickly lead to a dependency hell.

### Why there are several `node_modules` folders

- `/Core.UI.WebSite/node_modules` is a storage for public modules, and helps you to distinguish public / private components.

    It also makes sure that you only have 1 instance of a public component within your project. That way you never run into the risk of bundling a module twice.

- `/Core.UI.WebSite/Components/node_modules/` allows you to create internal, private components and re-use them in other private components (in opposite to if you put them in `Areas`)

# Best Practice File Structure

```javascript

/Core.UI.WebSite
    /Areas
        // --> Backend related stuff (incl. server side rendering of views)
        // --> No FrontendComponents here. Does not scale!
    /Components
        // --> Internal FrontendComponents (+ bootstrapping for the main applications)
        // --> why not into /Content ? Clear separation from existing code
        /dist
            // --> the shithole. From where you'll include them in MVC bundles
        /node_modules
            // --> empowers the node require algorithm for wiring internal modules
            qanda/
                // --> Internal module, following the usual file structure pattern
                index.js
                package.json
            tiresearch/
                ...
            tracking/
                // --> Component required from "qanda" and "tiresearch"
        /site-theme
            // --> for theming your project
        /utilities
            // --> stuff needed to build or organize the project. Also gulp tasks could go in here.
        main-bootstrap.js
            // --> That's where we require all the modules
            // --> We can require by name from internal & public modules. Fancy.
        admin-bootstrap.js
            // --> That's how you would create a separate bundle for a specific area.
    /Content
        // --> The only thing that is in here are legacy (existing) code
        // --> Over time, code from in here should move to /Components
    /...
        // --> MVC stuff we don' care
    /node_modules
        // --> That's where public available modules should go (also from npm.qxlricardo.internal)
        // --> Gives us control over what will be bundled and avoid dependency hell (duplication)
    package.json
        // --> The top-most package.json there is. All dependencies and peer dependencies go here
        // --> All the build scripts (npm) go here
```

# Best Practice Build Configuration

There are several criterias to look at when building and bundling the project.

1. We want to use libraries from the Static Server, not bundle them with our application code
2. We want to group internal components used by several bundles into a common bundle

## 1. Shimming modules from our Static server

Libraries / Modules on the Static Server almost always expose their functionality via `window`. Ex. jQuery.
Inside our private modules, we still want to properly `require` them.

The `browserify-shim` module comes to the rescue. In `package.json` of your private module that `require`s jQuery, use this:

```
"browserify": {
    "transform": [ "browserify-shim" ]
},
"browserify-shim": {
    "jquery": "global:jQuery"
}
```
* browserify-shim should always be the last transform.

This will remove the jQuery dependency from your application bundle. Also, in the bundled output, the `require` statement will be replaced by something like: `$ = (typeof window !== "undefined" ? window['jQuery'] : typeof global !== "undefined" ? global['jQuery'] : null)`
In your `index.html`, you include jQuery from the Static Server as usual:

```
<script src="https://pics.ricardostatic.ch/assets/jquery.min.4a356126.js"></script>
```

## 2. Factoring out common bundles automatically

The `factor-bundle` comes to the rescue. Let's say you have the following dependency graph and you would like to factor out `moduleC`.

```javascript

pageA
    |_moduleC

pageB
    |_moduleC

```

The `factor-bundle` analyses both entry points `moduleA` and `moduleB`, then creates a separate bundle with the shared dependencies, in this case something like `bundleC.js`. You can then include `bundleC.js` along with either the pageA or pageB bundle.

Take a look into `Components/utilities/factor-bundle.js` file to see the configuration.

> Note that you cannot use the `factor-bundle` plugin alongside with the `parcelify` plugin currently. We need a genious brain that can connect those two browserify plugins to create something like [cartero](https://github.com/rotundasoftware/cartero) but without the fancy output dir structure. Internally, `cartero` uses factor-bundle and parcelify as well, but programatically hooked together via events that those two plugins provide.
