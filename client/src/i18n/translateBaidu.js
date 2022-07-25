import baiduInfo from "@api/baiduTranslateId";
import srcFile from './en-us.json';
import md5 from 'md5';

async function ajax(q){
    var salt = Math.random().toString;
    q = content.replace(/\n\s*/g, " ");
    const sign = md5(baiduInfo.APP_ID + q + salt + baiduInfo.SECRET_KEY);
    const paramas = {
        'appid': APP_ID,
        'q': q,
        'from': 'en',
        'to': 'ara',
        'salt': salt,
        'sign': sign
    }

}
export default translateBaidu;