/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

// get folder name from terminal argument
const folderName = process.argv[2];
if (!folderName) {
  console.error('Please provide a folder name');
  process.exit(1);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// create the folder
fs.mkdir(`../src/screens/${capitalizeFirstLetter(folderName)}`, err => {
  if (err) throw err;
  console.log(`${folderName} Folder created successfully`);

  const fileName = capitalizeFirstLetter(folderName);

  const useHookFileName = capitalizeFirstLetter(fileName);

  // create styleFile.ts
  const styleFile = `import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
`;
  fs.writeFileSync(path.join(`../src/screens/${fileName}`, `${fileName}.style.ts`), styleFile, errStyles => {
    if (errStyles) throw errStyles;
    console.log(`${fileName}.style.ts file created successfully`);
  });

  // create defaultScreen.tsx
  const defaultScreen = `import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './${folderName}.style';

const ${useHookFileName} = () => {
  return (
    <View style={styles.container}>
      <Text>${useHookFileName} Screen</Text>
    </View>
  );
};

export default ${useHookFileName};
`;

  fs.writeFileSync(path.join(`../src/screens/${fileName}`, `${fileName}.tsx`), defaultScreen, errScreen => {
    if (errScreen) throw errScreen;
    console.log(`${fileName}.tsx file created successfully`);
  });

  const exportToIndex = `export {default as ${useHookFileName}} from "./${fileName}/${fileName}";\n`;

  fs.appendFile('../src/screens/index.ts', exportToIndex, errScreen => {
    if (errScreen) throw errScreen;
    console.log(`${useHookFileName} file created successfully`);
  });
});
