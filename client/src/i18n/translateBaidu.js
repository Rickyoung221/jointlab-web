
const md5 = require("md5");

const baiduInfo = {
    APP_ID: '20220724001281772',
    SECRET_KEY: '7J0okJpNhXGRJrD9e4pq',
    API_URL_HTTP:'http://api.fanyi.baidu.com/api/trans/vip/translate',
    API_URL_HTTPS:'https://fanyi-api.baidu.com/api/trans/vip/translate'
}

var pattern = /^[A-Z\0-9][\u4e00-\u9fa5a-zA-Z\d\.\s\-\%&',;=?@$:#\x22(){}/^!]+/;
var langList = [
    "en",
    // "jp",
];

main(langList);

async function main(langList){
    let to = langList[i];
    let fileName = './${to}.json';
    isFileExisted(fileName)
        .then(() => {

        })
}


async function ajax(q) {
  var salt = Math.random().toString;
  q = q.replace(/\n\s*/g, " ");
  if (
    typeof baiduInfo.APP_ID == "string" ||
    typeof q == "string" ||
    typeof salt == "string" ||
    typeof baiduInfo.SECRET_KEY == "string"
  ) {
    var res = baiduInfo.APP_ID + q + salt + baiduInfo.SECRET_KEY;
    const sign = md5(str);
    console.log(md5);
  } else {
    console.log("some of the params are not string");
  }
  
  const paramas = {
    appid: APP_ID,
    q: q,
    from: "en",
    to: "ara",
    salt: salt,
    sign: sign,
  };
}

// 合并两个对象
function deepMerge(obj1, obj2) {
  let key;
  for (key in obj2) {
    obj1[key] =
      obj1[key] && obj1[key].toString() === "[object Object]"
        ? this.deepMerge(obj1[key], obj2[key])
        : (obj1[key] = obj2[key]);
  }
  return obj1;
}

// 判断文件是否存在
function isFileExisted(filename) {
  return new Promise(function (resolve, reject) {
    fs.access(filename, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    });
  });
}