This TEST README would normally document whatever steps are necessary to get your application up and running.

Setting up the development environment
This section will help you install and build react native app (using React Native CLI).
For more details please refer to react native documentation https://reactnative.dev/docs/environment-setup

## Android

#### 1/Node 14 or newer (npm included):

If you don't have Homebrew installed Homebrew installation page.

Run the following commands to install node & watchman:

    brew install node
    brew install watchman

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

#### 2/Java Development Kit 11:

Install the OpenJDK distribution called Azul Zulu using Homebrew. Run the following commands in a Terminal after installing Homebrew:

brew tap homebrew/cask-versions
brew install --cask zulu11

The Zulu OpenJDK distribution offers JDKs for both Intel and M1 Macs. This will make sure your builds are faster on M1 Macs compared to using an Intel-based JDK.

If you have already installed JDK on your system, we recommend JDK 11. You may encounter problems using higher JDK versions.

#### 3/Android development environment:

If you have android studio with Android 12(S) SDK already set up you can skip the following steps.

###### 3.1/Install android studio:

Download and install android studio.

On installation wizard make sure to check Android SDK, Android SDK Platform and Android Virtual Device before clicking next.

###### 3.2/Install the android sdk:

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 12 (S) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.
then make sure the following items are checked:

Android SDK Platform 31.

Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image

Click "Apply" to download and install the Android SDK and related build tools.

###### 3.3/Configure the ANDROID_HOME environment variable:

Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:
    export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell.

Run source ~/.zprofile (or source ~/.bash_profile for bash) to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

Make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

## IOS

#### 1/Node & Watchman:

Run the following commands to install node & watchman:

```
    brew install node
    brew install watchman
```

#### 2/Ruby

install a Ruby version manager and to install the proper version of Ruby in your system.

Some common Ruby version manager are:

rbenv
RVM
chruby
asdf-vm with the asdf-ruby plugin
To check what is your current version of Ruby, you can run this command:

```
ruby --version
```

#### 3/Xcode & CocoaPods:

Install Xcode via the Mac App Store

Command Line Tools You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

Installing an iOS Simulator in Xcode To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.

Install library dependencies cocoaPods.

Run the application
Run the following command to install react native cli globally:

```
npm install -g react-native-cli
react-native --version //to ensure that the installation process was a success
```

Clone the repository:

```
git clone https://account@bitbucket.org/anypli/securence.git
```

switch to the repo folder:

```
cd securence
```

Install all the dependencies and the packages:

```
yarn
```

Install ios dependencies:

```
cd ios
pod install
```

Running react native application:
Connect a physical device via usb (make sure to enable USB Debugging) or run an emulator (via android studio or Xcode).

for android run adb devices to get the list of attached devices.

```
npx react-native run-android //to run application on android device
npx react-native run-ios //to run application on ios device.
```

#### Metro server:

Metro is a JavaScript bundler. It takes in an entry file and various options, and gives you back a single JavaScript file that includes all your code and its dependencies. Metro is started automatically when running the application. You can start metro by running the following command:

```
    npx react-native start
```

From metro you can :

Press r to reload the application.

Press d to open developer menu in the application.

You can enable Live reloading from the Developer menu. The app will reload whenever the JavaScript code has changed.

## Available Scripts

To run a script type the command npm run followed by script name

| Script            | Description                           |
| ----------------- | ------------------------------------- |
| `start`           | Starts metro server.                  |
| `ios`             | Runs application on ios device        |
| `android`         | Runs application on an android device |
| `lint`            | Lint your code with ESLint.           |
| `set:env:dev`     | Sets the environment to develop       |
| `set:env:staging` | Sets the environment to staging       |
| `set:env:preprod` | Sets the environment to preprod       |
| `set:env:prod`    | Sets the environment to prod          |
| `lint`            | Check lint issues                     |

---

#### Fastlane

Fastlane is an open source platform aimed at simplifying Android and iOS deployment.
fastlane lets you automate every aspect of development and release workflow.

#### Ruby

fastlane supports Ruby versions 2.5 or newer. Verify which Ruby version you're using:

$ ruby --version
ruby 2.7.2p137 (2020-10-01 revision 5445e04352) [x86_64-darwin19]
Bundler

It is recommended that you use Bundler and Gemfile to define your dependency on fastlane. This will clearly define the fastlane version to be used and its dependencies, and will also speed up fastlane execution.

Install Bundler by running gem install bundler

```
Run bundle update
```

To execute fastlane lane navigate to fastlane folder and run this command:
bundle exec fastlane --env dev|staging|preprod|prod

Then choose a lane (By number) in the command line.
PS: You should strictly choose an env from dev|staging|preprod|prod

You can find ios provisioning profiles and certificates in /fastlane/certs directory

For deploy add playstore and appstore json files (From appstore connect and google play) to
fastlane/deploy

###### Available lanes

| Script                | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| `ios prepare`         | Prepare ios environment including changing app id, signing, app icon         |
|                       | ( with badge for non-production envs), version setup based on current git    |
|                       | branch (ex release/1.0.1 => version: 1.0.1) and executes env script.         |
|                       | Specify option `type` for build type (DEBUG or RELEASE).                     |
| `ios runApp`          | Executes prepare lane and runs application on ios device                     |
| `ios build`           | Executes prepare lane and generates ipa file with export method defined      |
|                       | in .env files.                                                               |
|                       | Specify `deploy` option to directly deploy ipa to appstore connect.          |
|                       | Specify `skipBuild` option to skip archive and pass diretly to deloy.        |
| `ios buildDeploy`     | Deploy ipa to appstore connect by default this lane does not execute archive |
|                       | Specify `build` option to execute build lane.                                |
| `android prepare`     | Prepare android environment including changing package name, app name, icon  |
|                       | (with badge for non production build), version setup based on current git    |
|                       | branch, keystore for release builds and executes env script.                 |
|                       | Specify option `type` for build type (DEBUG or RELEASE).                     |
| `android runApp`      | Executes prepare lane and runs application on android device.                |
| `android build`       | Executes prepare lane and generates APK and AAB files.                       |
|                       | Specify `deploy` option to directly deploy aab to playstore.                 |
|                       | Specify `track` option to set deploy track (alpha by default).               |
|                       | Specify `skipBuild` option to skip build and pass diretly to deloy step.     |
| `android buildDeploy` | Deploy aab to playstore by default this lane does not execute build          |
|                       | Specify `track` option to set deploy track (alpha by default).               |
|                       | Specify `build` option to execute build lane.                                |
| `prepare`             | Prepare ios and android environment                                          |
|                       | Specify option `type` for build type (DEBUG or RELEASE).                     |

lanes run sample: fastlane prepare --env dev

---
