import { ls } from './ls';
import { cd } from './cd';
import { touch } from './touch';
import { cat } from './cat';
import { echo } from './echo';
import { rm } from './rm';
import { sh } from './sh';
import { pwd } from './pwd';
import { open } from './open';
import { node } from './node';
const commandMap = [
  {
    name: 'ls',
    description: 'list directory contents',
    usage: 'ls [OPTION]... [FILE]...',
    callback: ls,
  },
  {
    name: 'cd',
    description: 'change the shell working directory',
    usage: 'cd [DIRECTORY]',
    callback: cd,
  },
  {
    name: 'pwd',
    description: 'print name of current/working directory',
    usage: 'pwd',
    callback: pwd,
  },
  {
    name: 'open',
    description: 'open file',
    usage: 'open [FILE]',
    callback: open,
  },
  {
    name: 'touch',
    description: 'change file timestamps',
    usage: 'touch [OPTION]... FILE...',
    callback: touch,
  },
  {
    name: 'cat',
    description: 'concatenate files and print on the standard output',
    usage: 'cat [OPTION]... [FILE]...',
    callback: cat,
  },
  {
    name: 'echo',
    description: 'display a line of text',
    usage: 'echo [STRING]...',
    callback: echo,
  },
  {
    name: 'rm',
    description: 'remove files or directories',
    usage: 'rm [OPTION]... [FILE]...',
    callback: rm,
  },
  {
    name: 'sh',
    description: 'run shell script',
    usage: 'sh [FILE]',
    callback: sh,
  },
  {
    name: 'node',
    description: 'run node script',
    usage: 'node [FILE]',
    callback: node,
  },
  {
    name: 'help',
    description: 'display help information',
    usage: 'help',
    callback: (input: string, output: (text: string) => void) => {
      let outputString = '';
      for (const command of commandMap) {
        outputString += `${command.name}: ${command.description}\r\n`;
      }
      output(outputString);
      return output;
    },
  },
  {
    name: 'cls',
    description: 'clear screen',
    usage: 'cls',
    callback: (input: string, output: (text: string) => void) => {
      output('\x1b[2J\x1b[0f');
      return output;
    },
  },
];

export { commandMap };
