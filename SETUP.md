# Let's setup your development environment

The project uses React Native CLI. It requires Xcode or Android Studio to get started. If you already have one of these tools installed, you should be able to get up and running within a few minutes. If they are not installed, you should expect to spend about an hour installing and configuring them.

## React Native CLI QuickStart

Follow these steps to configure development for macOS.

## Development OS - macOS

We'll be looking at Android Target OS setup first

## Target OS - Android

You will need Node, Watchman, the React Native command line interface, a JDK, and Android Studio.

## Installing dependencies

The project works on node version greater than 18 so if you have node versions below 18 you can use node version manager (nvm) which allows you to quickly install and use different versions of node via the command line.

### Node and Watchman

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

You can find the latest command on
[Node version manager](https://github.com/nvm-sh/nvm)

The below will be added to you ~/.zshrc or ~/.bashrc which you have created

```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

If you don't have those file you can create it on root by,

```bash
touch ~/.zshrc
```

Once installed you can install any node version and switch to node version above 18 using below command

```bash
nvm install --lts
```

You can verify your node version using,

```bash
node -v
```

You can then switch versions using,

```bash
nvm use 20.11.1
```

For installing Watchman you need to install homebrew using the below command,

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

You can always find the latest command on
[Homebrew](https://brew.sh/)

Once installed you can install Watchman using following command,

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

Add the following lines to your ~/.zprofile or ~/.zshrc config file

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Now run
`source ~/.zprofile` or `source ~/.bash_profile` to load the config into your current shell.

That's it you are all set to run android apps🥳

## Creating a new application

If you previously installed a global react-native-cli package, please remove it as it may cause unexpected issues:

```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

Installing new Apps,

```bash
npx react-native@latest init ProjectName
```

### Running your React Native Android application

```bash
yarn android
```

Congratulations! You've successfully run your first React Native app.
