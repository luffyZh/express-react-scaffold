const crypto = require('crypto');

module.exports = {
  MD5_SUFFIX: 'luffyZhouNodeCrawler我是一个固定长度的盐值',
  md5: (pwd) => {
    let md5 = crypto.createHash('md5');
    return md5.update(pwd).digest('hex');
  },
  secretKey: 'luffy_youdao_1993711_26_jwttoken'
};