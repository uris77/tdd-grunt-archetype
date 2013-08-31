# TDD - Grunt - Archetype.
This is a skeleton that can be used to quickly start a javascript/coffeescript project with some testing utilities
pre-configured. It uses __testem__ and __jasmine__ for testing.

## Usage
Clone the project:
```
git clone https://github.com/uris77/tdd-grunt-archetype my-project-name
```
Run the tests:
```
$ grunt testem:run:environment
```

All __specs__ should be placed under the __spec__ directory and all source code should be placed under __src__ folder.

## Project Directory Structure
``` bash
.
├── src
│   └── app.coffee         # <-- JS & CoffeeScript
│
├── spec
│   ├── helpers             # <-- Spec helpers
│   │   ├── jasmine-fixture.js
│   │   ├── jasmine-given.js
│   │   └── jasmine-stealth.js
│   └── example_spec.coffee    # <-- Jasmine specs(JS or Coffee)
└── vendor
    └── js
        ├── underscore.js   # <-- Underscore
        └── jquery.js       # <-- Jquery

```


## Requirements
* Nodejs
* npm
* gruntjs

## License
[GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)