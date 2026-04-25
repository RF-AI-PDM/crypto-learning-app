/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = {
  'bg-black': 'bg-white dark:bg-black',
  'text-white': 'text-gray-900 dark:text-white',
  'text-gray-300': 'text-gray-700 dark:text-gray-300',
  'text-gray-400': 'text-gray-600 dark:text-gray-400',
  'bg-gray-900': 'bg-gray-100 dark:bg-gray-900',
  'bg-gray-800': 'bg-gray-200 dark:bg-gray-800',
  'bg-gray-700': 'bg-gray-300 dark:bg-gray-700',
  'border-gray-800': 'border-gray-300 dark:border-gray-800',
  'border-gray-700': 'border-gray-300 dark:border-gray-700',
  'border-gray-600': 'border-gray-400 dark:border-gray-600',
  'text-green-400': 'text-green-600 dark:text-green-400',
  'text-cyan-400': 'text-cyan-600 dark:text-cyan-400',
  'text-purple-400': 'text-purple-600 dark:text-purple-400',
  'text-yellow-400': 'text-yellow-600 dark:text-yellow-400',
  'text-orange-400': 'text-orange-600 dark:text-orange-400',
  'text-red-400': 'text-red-600 dark:text-red-400',
  'glass-panel': 'glass-panel-light dark:glass-panel',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Only apply to classNames
  Object.keys(replacements).forEach(oldClass => {
    const newClass = replacements[oldClass];
    // Regex to match the old class inside className string
    // e.g. className="... bg-black ..."
    const regex = new RegExp(`\\b${oldClass}\\b(?! dark:)`, 'g');
    content = content.replace(regex, newClass);
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  });
}

walkDir(directory);
