### superagent 一种客户端请求代理模块

    .get()//http请求post get del ,,,
    .set('协议头字段','值')
    .query()

### 页面编码碰见非utf-8需要转换编码时，使用superagent-charset进行编码，部分关键代码：

    var charset = require("superagent-charset");
    var superagent = charset(require("superagent"));   //将superagent模块传递给superagent-charset
    superagent.get(url)
      .charset('gb2312')          

### 不使用superagent包时，可以使用iconv-lite配合chunk实现转码
    var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
    var $ = cheerio.load(html, {decodeEntities: false});
