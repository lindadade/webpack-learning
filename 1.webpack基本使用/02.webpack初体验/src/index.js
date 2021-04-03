/*
  index.js: webpack入口起点文件

  1. 运行指令：
    开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是开发环境
    打包成功后输出的值:
    // Hash值 -> 该文件唯一Hash值（唯一ID）

    生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
      webpack会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
      整体打包环境，是生产环境

*/
// import './index.css';

// import data from './data.json';
// console.log(data);

function add(x, y) {
  return x + y;
}

console.log(add(1, 2));
