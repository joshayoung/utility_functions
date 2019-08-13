# utility_functions

#### Project Setup:
* Add npm:
  * `npm init -y`
* Add .gitignore file:
  * `touch .gitignore`
* Install jest:
  * `yarn add --dev jest`
* Install Babel:
  * `yarn add @babel/present-env --dev`
* Add `.babelrc` file with this content:
  * ```
     {
        presets: ['@babel/preset-env']
     }
    ```
* Add 'watch' command to yarn scripts:
   * `jest --watchAll`
*Add 'yarn-error.log' to `.gitignore` file.
* Add debugging instructions.

#### To Do:
* Add unit tests for these functions.

#### Debugging:
* Install the 'Jest' VS Code [plugin](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest).
* Use a `debugger;` statement in your code.
* Right click on your test and select: 'Debug Jest'.
* To output a method value in the VC Code 'Debugger Console':
  * `_utilities.utilities.elementExists("#test")`