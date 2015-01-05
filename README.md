# grunt-json-remove-fields

> A Grunt task to remove specified fields in JSON files. Personally, I used this plugin to remove **devDependencies** field to the *package.json* file used in the production environment.

## Getting Started
This plugin requires Grunt `~0.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-remove-fields --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-remove-fields');
```

## The "json_remove_fields" task

### Overview
In your project's Gruntfile, add a section named `json_remove_fields` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_remove_fields: {
    package_json: {
      // Task-specific options go here.
    },
    some_other_json: {
      // Task-specific options go here.
    },
  },
});
```

### Options

#### src
Type: `String`

The JSON file where do you want to remove some field.

#### dest
Type: `String`
Default value: The same value defined in **src** option.

The destination JSON file with removed fields. If this option is not defined than the file specified in **src** will be overwritten.

#### fields
Type: `Array`

A list of fields to remove.

#### space
Type: `Integer` or `String`
Default value: 2

The same use of the third argument of the **JSON.stringify** Javascript method. [See here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) for more details. 

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
    //      
    json_remove_fields: {
      package_json: {
          src: 'package.json',
          dest: 'dist/package.json',
          fields: ['devDependencies']
      },
      some_other_json: {
          src: 'color.json',
          dest: 'dist/color.json',
          fields: ['magenta', 'black'],
          space: '\t'
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
