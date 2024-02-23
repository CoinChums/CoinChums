# Let's setup your development environment

The project uses React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

## React Native CLI QuickStart

Follow these steps to configure development for macOS.

## Development OS - macOS

Configuring Android target OS

## Target OS - Android

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

## Installing dependencies

The project requires Node version 18 or higher. If you're using a Node version below 18, you can utilize Node Version Manager (nvm). This tool enables you to easily install and switch between different Node.js versions directly from the command line.

### Node and Watchman Installation

Follow the below steps for installing nvm if node version is below 18,

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

You can discover the most up-to-date command on the
[Node version manager](https://github.com/nvm-sh/nvm)

Below is the code snippet to be added to your `~/.zshrc` or `~/.bashrc` file, which you should have created:

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

If you don't have those files yet, you can create them in the root directory by running:

```bash
touch ~/.zshrc
```

Once installed, you can easily manage Node versions. To install and switch to a Node.js version above 18, use the following command:

```bash
nvm install --lts
```

You can verify your Node version using:

```bash
node -v
```

You can then switch versions using,

```bash
nvm use 20.11.1
```

For installing Watchman, we suggest using Homebrew, a package manager for macOS. You can install Homebrew by running the following command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For the most current command, you can visit the [Homebrew](https://brew.sh/)

After installing Homebrew, you can then proceed to install Watchman with the following command:

```bash
brew install watchman
```

### Java Development Kit

We recommend installing the OpenJDK distribution called Azul Zulu using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```bash
brew tap homebrew/cask-versions
brew install --cask zulu17

# Get path to where cask was installed to double-click installer
brew info --cask zulu17
```

After you install the JDK, update your JAVA_HOME environment variable. If you used above steps, JDK will likely be at /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

If you have already installed JDK on your system, we recommend JDK 17. You may encounter problems using higher JDK versions.

### Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. Carefully follow the next steps,

### 1. Install Android Studio

Download and install Android Studio from [Android Studio](https://developer.android.com/studio)
Once installed make sure the below items are checked

- Android SDK
- Android SDK Platform
- Android Virtual Device

### 2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 13 (Tiramisu) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:

- Android SDK Platform 33
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 33.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

### 3. Configure the ANDROID_HOME environment variable

Add the following lines to your `~/.zprofile` or `~/.zshrc` configuration file:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Now, to load the configuration into your current shell, run either:

```bash
source ~/.zprofile` or `source ~/.bash_profile
```

With that done, you're all set to run Android apps! 🥳

## Setting Up a New Test Application

If you have a global react-native-cli package installed, it's recommended to remove it to prevent any potential issues:

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

To create a new React Native application, run the following command:

```bash
npx react-native@latest init ProjectName
```

### Running your React Native Android application

Once your application is initialized, you can run it using:

```bash
yarn android
```

Congratulations! You've just run your first React Native app successfully! 🎉

## Target OS - iOS

Configuring Android target OS

### Xcode

The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

### Command Line Tools

Open Xcode, then choose Settings... (or Preferences...) from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

### Installing an iOS Simulator in Xcode

If you're utilizing Xcode version 14.0 then to install a simulator, open Xcode > Settings > Platforms tab, then click "+" icon and select iOS… option.

### CocoaPods

CocoaPods is one of the dependency management system available for iOS. CocoaPods is a Ruby gem. You can install CocoaPods using the version of Ruby that ships with the latest version of macOS.

```bash
sudo gem install cocoapods
```

If you face issues, update your ruby version using [rvm](https://rvm.io/)

With that done, you're all set to run iOS apps! 🥳

### Running your React Native iOS application

Once your application is initialized, you can run it using:

```bash
yarn ios
```
