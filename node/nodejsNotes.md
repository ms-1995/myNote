#### CommonJS规范
    module.exports = variable;//暴露模块中的变量(可以为函数，数组，变量)
    exports.a = b//a为key,b为value.用于多个值时,不推荐使用
    var ref = require('module_name')//引用其他模块暴露的变量
#### global
    nodejs环境全局对象:global
    浏览器环境全局对象:window
#### process
    process === global.process；
    process.version;
    process.platform;
    process.arch;
    process.cwd();//返回当前工作目录
    process.chdir('/private/tmp');//切换当前工作目录
    process.nextTick();//下一次事件响应中执行
    process.on('exit', function () {});//如果响应exit事件，在程序即将退出时执行某个回调函数：
#### 判断JavaScript执行环境
    if (typeof(window) === 'undefined') {
        console.log('node.js');
        } else {
        console.log('browser');
        }
    //根据浏览器和Node环境提供的全局变量名称来判断
### fs模块(文件系统模块)
##### 异步读文件
    var fs = require('fs');
    fs.readFile('xxx.txt','UTF-8',function(err,data){//读取二进制文件时，不传入文件编码时,data参数返回Buffer对象(包含零个或任意个字节的数组)
            if(err){
                console.log(err);//读取发生错误,err代表错误对象,data为undefined
            }else{
                console.log(data);//正常读取,err为null,data为读取到的String
            }
        });
##### 同步读文件
    var fs = require('fs');
    try{
        var data = fs.readFileSync('xxx.txt','UTF-8');
        console.log(data);
    }catch(err){
        //需要用try...catch捕获错误
    }
##### 写文件
    var fs = require('fs');
    var data = 'Hello,Node.js';
    fs.writeFile('xxx.txt',data,function(err){});//异步
    fs.open('xxx.txt','a',function(err,fd){//追加写入
            if(err){}else{
                fs.writeFile(fd,data,function(err){});
            }
        });
    fs.writeFileSync('xxx.txt',data);//同步
##### stat
    //获取文件大小，创建时间等信息。
    var fs = require('fs');
    fs.stat('xxx.txt',function(err,stat){//异步
            if(err){}else{
                stat.isFile();// 是否存在文件
                stat.isDirectory(); // 是否是目录
                stat.size;//文件大小
                stat.birthtime;// 创建时间, Date对象
                stat.mtime;// 修改时间, Date对象:
            }
        });
        try{//同步
            var data = fs.statSync('xxx.txt');
            if(data.isFile()){
                data.size;
                }
            }catch(err){}
##### 同步异步
    服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行。
- - -
### stream 支持“流”
##### 文件流读取
    var fs = require('fs');
    var rs = fs.createReadStream('xxx.txt','UTF-8');
    rs.on('data',function(chunk){});//chunk是流的一部分
    rs.on('end',function(){});
    rs.on('error',function(err){});
##### 文件流写入
    var fs = require('fs');
    var ws = fs.createWriteStream('xxx.txt','UTF-8');
    ws.write('文本数据');
    ws.write('');
    ws.end();
    //var ws = fs.createWriteStream('xxx.txt');
    //ws.write(new Buffer('二进制数据', 'utf-8'));
    //ws.write(new Buffer('', 'utf-8'));
    //ws.end();
##### pipe 将输入输出流串起来
    var fs = require('fs');
    var rs = fs.createReadStream('xxx.txt');
    var ws = fs.createWriteStream('xxx.txt');
    rs.pipe(ws);
    //当Readable流的数据读取完毕，end事件触发后，将自动关闭Writable流。
    //不自动关闭Writable流:rs.pipe(ws,{end:false});
### http模块
#### http服务器
    var http = require('http');
    var server = http.createServer(function(request,response){//HTTP请求、HTTp响应
            response.writeHead(200,{'Content-Type':'text/html'});//写入200，设置Content-Type
            response.end('<h1></h1>');//写入HTML内容
        });
        sever.listen(8080);//服务器监听8080端口
#### 文件服务器
##### url模块解析URL
    var url = require('url');
    url.parse('')
##### path模块处理本地文件路径
    var path = require('path');
    var workDir = path.resolve('.');//解析当前目录 '/Users/michael'
    var filePath = path.join(workDir,'pub','index.html');//组合完整的文件路径:当前路径+'pub'+'index.html'
### crypto模块 加密和哈希算法
#### MD5和SHA1
    MD5是一种常用的哈希算法，用于给任意数据一个“签名”，通常用16进制的字符串表示。
    const crypto = require('crypto');
    const hash = crypto.createHash('md5');
    hash.update('XXXXXX');//可多次调用update()
    hash.digest('hex');//以十六进制取出md5值，只要调用hash对象就被清空
    SHA1,sha256,sha512同理
#### Hmac
    Hmac算法也是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥。
    const crypto = require('crypto');
    const hmac = crypto.createHmac('sha256','secret-key');//只要密钥发生了变化，那么同样的输入数据也会得到不同的签名
#### AES
    AES是一种常用的对称加密算法，加解密都用同一个密钥。crypto模块提供了AES支持，但是需要自己封装好函数，便于使用。
    const crypto = require('crypto');
    var data = 'Hello, this is a secret message!';//初始数据
    var key = 'Password!';//密钥
    var encrypted = function(data,key){//加密
        const cipher = crypto.createCipher('aes192', key);
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    var decrypted = function(encrypted,key){//解密
        const decipher = crypto.createDecipher('aes192', key);
        var decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
#### Diffie-Hellman
    DH算法是一种密钥交换协议，它可以让双方在不泄漏密钥的情况下协商出一个密钥来。
    const crypto = require('crypto');
    var a = crypto.createDiffieHellman(512);
    var a_keys = a.generateKeys();
    var prime = a.getPrime();
    var generator = a.getGenerator();
    var b = crypto.createDiffieHellman(prime,generator);
    var b_keys = b.generateKeys();
    var a_secret = a.computeSecret(a_keys);
    var b_secret = b.computeSecret(b_keys);
#### 证书
    crypto模块也可以处理数字证书。数字证书通常用在SSL连接，也就是Web的https连接。
    一般情况下，https连接只需要处理服务器端的单向认证，如无特殊需求（例如自己作为Root给客户发认证证书），建议用反向代理服务器如Nginx等Web服务器去处理证书。

