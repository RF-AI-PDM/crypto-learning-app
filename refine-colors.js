/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const directory = './src';

const replacements = {
  'bg-gray-50': 'bg-slate-50',
  'bg-white dark:bg-black': 'bg-slate-100 dark:bg-slate-900',
  'bg-gray-100 dark:bg-gray-900': 'bg-slate-200 dark:bg-slate-800',
  'bg-gray-200 dark:bg-gray-800': 'bg-slate-300 dark:bg-slate-800',
  'bg-gray-300 dark:bg-gray-700': 'bg-slate-300 dark:bg-slate-700',
  'border-gray-300 dark:border-gray-800': 'border-slate-300 dark:border-slate-700',
  'border-gray-300 dark:border-gray-700': 'border-slate-300 dark:border-slate-600',
  'border-gray-400 dark:border-gray-600': 'border-slate-300 dark:border-slate-600',
  'text-gray-900 dark:text-white': 'text-slate-800 dark:text-slate-100',
  'text-gray-700 dark:text-gray-300': 'text-slate-700 dark:text-slate-300',
  'text-gray-600 dark:text-gray-400': 'text-slate-600 dark:text-slate-400',
  'text-gray-500': 'text-slate-500',
  'text-gray-400': 'text-slate-400',
  'text-gray-300': 'text-slate-300',
  'border-gray-800': 'border-slate-700',
  'border-gray-700': 'border-slate-600',
  'bg-gray-800': 'bg-slate-800',
  'bg-gray-900': 'bg-slate-900',
  'bg-[#050a0f]': 'bg-slate-900',
  'text-[#e2e8f0]': 'text-slate-200',
  'from-gray-900': 'from-slate-900',
  'to-gray-800': 'to-slate-800',
  'bg-gray-900/50': 'bg-slate-900/50',
  'bg-gray-800/50': 'bg-slate-800/50',
  'bg-gray-800/80': 'bg-slate-800/80',
  'bg-gray-900/30': 'bg-slate-900/30',
  'border-gray-600': 'border-slate-600',
  'text-gray-900': 'text-slate-800',
  'dark:bg-[#050a0f]': 'dark:bg-slate-900',
  'dark:text-[#e2e8f0]': 'dark:text-slate-200'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  Object.keys(replacements).forEach(oldClass => {
    const newClass = replacements[oldClass];
    content = content.split(oldClass).join(newClass);
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
