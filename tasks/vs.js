/*
 * grunt-vs
 * 
 *
 * Copyright (c) 2014 Tyler Steele
 * Licensed under the MIT license.
 */

'use strict';
var path = require("path");
var exec = require("child_process").exec;
var fs = require('fs');
module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('vs', 'Build your VS projects', function () {
    var done = this.async();
    var opts = {};

    opts.solution = this.data.solution;
    opts.cwd = this.data.cwd || process.cwd();
    opts.target = this.data.target || 'debug'
    opts.action = this.data.action || 'build'
    opts.callback = this.data.callback || function(){};

    var solutionPath = path.resolve(opts.cwd + opts.solution)
    if(!fs.existsSync(solutionPath)){
      grunt.log.error('No Solution found to build');
      done(false);
    }
    
    var command = 'devenv "' + solutionPath + '" /' + opts.action + ' ' + opts.target;
    grunt.log.write('Executing command: ' + command);
    var child = exec(command,function (error, stdout, stderr) {
      opts.callback(error);
      done();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  });

};
