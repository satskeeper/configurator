# Inheritance plan configurator

This project contains the source code for the Bitcoin inheritance plan configurator
used and maintained by satskeeper.com

The configurator can be used to generate, view & edit encrypted inheritance plans.

## Options:
### Language
- The configurator is currently available in English and German.
- Query parameter: `lang`
- Default value: `en`
- Changing the language to German: http://127.0.0.1:4000/configurator?lang=de

### Dev mode
- The configurator can be run in normal or dev mode. In normal mode you are required
to disable your internet connection in order to use the configurator. In dev mode
you can stay connected.
- Query parameter: `dev`
- Default value: `false`
- Changing to dev mode: http://127.0.0.1:4000/configurator?dev=true

## Running the configurator locally
In order to run this configurator locally follow these steps:
1. Download/clone this repository to your computer
2. Open the downloaded `configurator` folder in your command line/terminal
3. Start a local HTTP server (see [here](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server#running_a_simple_local_http_server) for instructions on how to run a python HTTP server)
4. Visit the url provided by your HTTP server (e.g. http://127.0.0.1:4000)
5. Visit the `/configurator` page
