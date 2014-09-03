# grunt-vs

> Build your VS projects
## Dependecies

### node/npm
  Install nodejs (and npm) from: http://nodejs.org/download/

### Visual Studio

  This plugin depends on the devenv executable. You must have Visual studio installed.
  **This plugin has only been tested with VS2013**

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-vs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-vs');
```

## The "vs" task

### Overview
In your project's Gruntfile, add a section named `vs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  vs: {
    your_target: {
      // Target-specific options go here.
    },
  },
})
```

### Options


#### options.solution

Type: String

Required 

A string value that represents the relative path to the solution from the current working directory.

#### options.target

Type: String

Default value: debug

A string value that represents the build configuration that you wish to build.

### options.action

Type: String

Default value: build

Possible values: build,rebuild,clean

What action you want visual studio to execute on your solution

### options.cwd

Type: String

Default value: process.cwd()

Override the default cwd. If you override this make sure your solution path is relative to this value.

### options.callback

Type:Function(error)

Default value: function(){}

Parameters: 
- error: If there was an error building the project it will be passed in here

A function that is called when the build process is complete.


### Usage Examples

#### Default Options


```js
grunt.initConfig({
  vs: {
    mySolution: {
      solution:'/path/to/my/solution',  
      target:'DEBUG', 
      cwd:'new/working/directory', 
      action:'build|rebuild|clean'  
      callback:function(error){}, 
    },
  },
})
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 inital release

## License
Copyright 2014 Vistaprint

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
