# react-native-create-guid

Minimal library to create Guids in React Native. It uses the native implementations to generate one and send it over to JS.

## Why?

When faced with the problem of generating a GUID in React Native, I found that there were no current good solutions. Relying on `Math.random` didn't seem like a good idea, and the other alternatives found like [react-native-uuid](https://www.npmjs.com/package/react-native-uuid) that are just ports of node.js libraries (needed to install other libraries buffer).

Since native platforms already have ways to create GUIDs that are useful, creating a simple native library would be enough to use them in React-Native.

## Getting started

`$ npm install react-native-create-guid --save`

### Mostly automatic installation

**RN < 0.60:**

`$ react-native link react-native-create-guid`

**RN >= 0.60:**

`$ cd ios && pod install`

### Manual installation

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-create-guid` and add `CreateGuid.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libCreateGuid.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`

- Add `import com.reactnative.createguid.CreateGuidPackage;` to the imports at the top of the file
- Add `new CreateGuidPackage()` to the list returned by the `getPackages()` method

2. Append the following lines to `android/settings.gradle`:
   ```
   include ':react-native-create-guid'
   project(':react-native-create-guid').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-create-guid/android')
   ```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
   ```
     compile project(':react-native-create-guid')
   ```

## Usage

Check the example under `example` folder for it's usage.

```javascript
import { createGuid } from "react-native-create-guid";

// in an async function;
const guid = await createGuid();

// using promises
createGuid().then(guid => console.log(guid));
```
