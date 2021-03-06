###CSS hack:统一不同浏览器的页面效果

####条件注释法：
* 只在IE下生效：`<!--[if IE]>	<![endif]-->`	
* 只在IE6下生效：`<!--[if IE 6]>	<![endif]-->`	
* 只在IE6以上版本生效：`<!--[if gte IE 6]>	<![endif]-->`	
* 只在IE8上不生效：`<!--[if ! IE 8]>	<![endif]-->`	
* 非IE浏览器生效：`<!--[if !IE]>	<![endif]-->`

####类内属性前,后缀法：
	background-color:#f1ee18;/*所有识别*/
	.background-color:#00deff\9; /*IE6、7、8识别*/
	+background-color:#a200ff;/*IE6、7识别*/
	_background-color:#1e0bd1;/*IE6识别*/
####选择器前缀法：
	*html *前缀只对IE6生效
	*+html *+前缀只对IE7生效
	@media screen\9{...}只对IE6/7生效
	@media \0screen {body { background: red; }}只对IE8有效
	@media \0screen\,screen\9{body { background: blue; }}只对IE6/7/8有效
	@media screen\0 {body { background: green; }} 只对IE8/9/10有效
	@media screen and (min-width:0\0) {body { background: gray; }} 只对IE9/10有效
	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {body { background: orange; }} 只对IE10有效

1. 要注意CSS样式顺序，要考虑样式的优先级，优先级低会被后面优先级高的样式覆盖掉。
2. 如果正确样式前有无法被当前浏览器解析的样式，会导致整个CSS样式加载失败。
3. 一般是将适用范围广、被识别能力强的CSS定义在前面。
4. 要尽量避免使用hack技术，仅用于向下兼容时不得已使用。(会使html文档混乱不堪，增加维护的负担)
5. 随着互联网发展浏览器标准越来越趋于统一，hack也在逐渐改变甚至消失

####常用兼容标记：
1. *,+,<,> //IE6,IE7
2. _ //IE6
3. \9 //IE6,IE7,IE8
4. \0 //IE8,Opera
5. @media screen and (-webkit-min-device-pixel-ratio:0){.hack {}} //Safari,Chrome
6. .hack , x:-moz-any-link, x:default{} //IE7,Firefox3.5及以下
7. @-moz-document url-prefix(){.hack{}} //Firefox
8. @media all and (min-width: 0px){.hack {}} //Firefox,Opera,Sarfari,Chrome	
9. *+html .hack {} //IE7
10. //.hack为class名