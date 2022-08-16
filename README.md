# addin-debug
A reproduction of an issue filed on the [Office-Addin-Scripts](https://github.com/OfficeDev/Office-Addin-Scripts) repository. 
See issue: https://github.com/OfficeDev/Office-Addin-Scripts/issues/667

## Prerequisites
Please answer the following questions before submitting an issue.
- [ ] I am running the latest version of Node and the tools
- [x] I checked the documentation and found no answer
  - I only found contradicting information in the docs
- [x] I checked to make sure that this issue has not already been filed
  - there is a similar GH issue which is concerned with one of the starter examples though; I specifically experience issues around debugging on mac with VSCode
## Expected behavior
When running:
1. `npm build:dev`, then
2. `npx office-addin-debugging start ./dist/manifest.xml`
I expect the script to start outlook and sideload my add-in
## Current behavior
After running the dcommand, it logs errors (see [Failure logs](#failure-logs) below) to the terminal window.
### Steps to Reproduce
**Prerequesites**
- Mac w/ Apple M1 chip and macOS Monterey @ Version: 12.5
- Outlook for Mac @ Version: v16.63
- VSCode for Mac @ Version: 1.70.1 (Universal)

**How to reproduce**
1. **Download project.** Go to outlook-reproduction GitHub repository & clone the repository.
2. **Move into project.** `cd outlook-reproduction`
3. **Install pnpm.** `npm install -g pnpm`
4. **Install dependencies.** `pnpm i`
5. **Build `outlook`'s `/dist` folder.** `pnpm outlook build:dev`
6. **Debug and sideload the project.** In a second terminal window, run `pnpm outlook debug`
## Context
Please provide any relevant information about your setup. This is important in case the issue is not reproducible except for under certain conditions.
* Operating System: macOS Monterey @ Version: 12.5
* Node version: v18.7.0
* Office version: Mac for Outlook 16.63
* Tool version: ? Not sure how I can check that
## Failure Logs
```shell
> monorepo-workspace@1.0.0 outlook /Users/<my-user-name>/frontend
> pnpm --filter outlook "debug"
> outlook@0.0.1 debug /Users/<my-user-name>/frontend/apps/outlook
> pnpm exec office-addin-debugging start ./dist/manifest.xml
Debugging is being started...
App type: desktop
Sideloading the Office Add-in...
Error: Unable to start debugging.
Error: Unable to sideload the Office Add-in.
Error: Sideload to the Outlook app is not supported.
```
