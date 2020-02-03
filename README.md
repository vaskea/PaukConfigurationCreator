# PaukConfigurationCreator
This will enable users to create configuration files for Pauk Crawling System by cliking on HTML elements

Pauk Configuration Creator is a Chrome extension for creating Pauk configuration files.

To install, clone this git repo:

`git clone https://github.com/vaskea/PaukConfigurationCreator.git`

(optional) for setting up local dev env, run:

`npm install`

For loading up extension, open up in Chrome:

`chrome://extensions/`

Then click "Load Unpacked" (top left side) and browse to root dir of repo

Chrome will be active by default, if it is not, enable it bu clicking on slider.

You will get a "spider" icon in top right side of chrome, click it to start the extension.

You can then select which paramter you want to fill(works on input focus) and then just click on desired HTML element.

Extension will extract unique selector for that element.
