###link,@import引入样式区别

####link:
    <link rel="stylesheet" type="text/css" href="CSS文件路径"/>
1. 属XHTML标签，无兼容性问题。
2. 除可加载CSS外，还可用于定义RSS。
3. CSS样式文件与页面同时加载。
4. 支持使用javascript控制DOM改变CSS样式。
    
####@import:
    <style type="text/css">@import url(CSS文件路径)</style>
1. CSS提供，浏览器支持CSS2.1以上才能被识别。
2. 仅能加载CSS，可用于在CSS文件中链入样式，便于维护。
3. CSS样式文件等页面完全载入才会加载。
4. 不支持使用javascript控制DOM改变CSS样式。