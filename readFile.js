/* eslint-disable jsdoc/require-returns-check */
/*
 * @Author: xinchi
 * @Date: 2021-02-07 12:18:52
 * @LastEditTime: 2021-02-07 13:43:18
 * @LastEditors: xinchi
 * @Description: readFile js
 * @FilePath: \egg-api\readFile.js
 * @Dream Castle Inc.
 */
'use strict';
const fs = require('fs');
const readLine = require('readline');

/**
 * @description: 文件读取函数
 * @param {pathString} fileName 读取文件名
 * @param {function} callback 回调函数
 * @return {}
 */
function readFileToArr(fileName, callback) {

  const arr = [];
  const readObj = readLine.createInterface({
    input: fs.createReadStream(fileName),
  });

  // 一行一行地读取文件
  readObj.on('line', function(line) {
    arr.push(line);
    console.log(line);
  });
  // 读取完成后,将arr作为参数传给回调函数
  readObj.on('close', function() {
    callback(arr);
  });
}


// 读取数据后,处理完成后放入outpu.txt
readFileToArr('./2.txt', function(arr) {
  // 通过回调得到的,按行获得的数据
  const tempArr = [];
  arr.forEach(ele => {
    const userId = ele.match(/(?<=ID:)\d+/g);
    const objId = ele.match(/(?<=obj_id.*)\d+/g);
    tempArr.push(`${userId},${objId}`);
  });
  fs.writeFile('./output.txt', tempArr.join('\n'),
    function(err) {
      if (err) throw err;
    });
});
