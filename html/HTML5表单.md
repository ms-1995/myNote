## HTML5表单
- - -
### 表单元素
- - -
#### 使用form元素
    <form.../>元素用于生成表单，不会生成可视化部分。
#####　属性：
    action：指定当提交表单时向何处发送表单数据。
    method：指定提交表单时发送何种类型的请求。属性值可为get或post，通常建议发送POST请求。
    enctype：指定表单数据的编码方式。
    name：指定表单的名称，建议与id相同。
    target：指定使用哪种方式打开目标URL。
    autocomplete：指定表单是否启用自动完成功能，默认启用。（适用于<form>，及下面的<input>类型：text, search, url, telephone, email, password, datepickers, range 以及 color。）
    novalidate：表单不会验证表单的输入。
#####　GET请求和POST请求区别：
    GET方式的请求：
        1.浏览器会与表单处理服务器建立连接，然后直接在一个传输步骤中发送所有的表单数据：浏览器会将数据直接附在表单的 action URL 之后。这两者之间用问号进行分隔。
        2.可以直接在地址栏中看到请求参数名和值，安全性较差。
        3.请求传送的数据量较小，一般不大于2KB。
    POST方式的请求：
        1.浏览器将与 action 属性中指定的表单处理服务器建立联系，一旦建立连接之后，浏览器就会按分段传输的方法将数据发送给服务器。
        2.请求参数以及对应的值在HTML HEADER中传输，用户不能在地址懒看到请求参数值，安全性较高。
        3.传送的数据量较大，通常认为请求参数的大小不受限制。
##### enctype属性值：
    application/x-www-form-urlencoded：默认的编码方式，将表单控件的值处理成URL编码方式。
    multipart/form-data：以二进制流的方式处理表单数据，当需要通过表单上传文件时，必须使用该值。
    text/plain：空格转换为"+",不对特殊字符编码。主要适用于直接通过表单发送邮件。
##### 表单控件转换为请求参数的规则：
    1.每个有name属性的表单控件对应一个请求参数，没有name属性的表单控件不会生成请求参数。
    2.当多个表单控件有相同name值时，只生成一个请求参数，该参数有多个值。
    3.name属性指定请求参数名，value属性指定请求参数值。
    4.设置了disabled或disabled="disabled"属性时，表单控件不再生成请求参数。
#### 使用input元素
    根据type属性的值生成不同的输入元素。
    1.text：定义单行文本框。
    2.password：定义密码输入框。
    3.hidden：定义隐藏域。用于提交额外的请求参数（value属性值）。
    4.radio：定义单选框。
    5.checkbox：定义复选框。
    6.image：定义图像形式的提交按钮。
    7.file：定义文件上传域。
    8.submit：定义提交按钮。
    9.reset：定义重设按钮。重设按钮会清除表单中所有的数据。
    10.button：定义可点击按钮。
    11.color：定义颜色选择器。
    12.date：定义日期选择器。
    13.time：定义时间选择器。
    14.datetime：定义UTC日期、时间选择器。
    15.datetime-local：定义本地时间、日期选择器。
    16.week：定义week选择器。
    17.month：定义月份选择器。
    18.email：定义Email输入框。文本框中输入内容不符合Email格式，浏览器将不会允许提交表单。
    19.tel：定义电话号码输入框。但浏览器不会进行验证。
    20.url：定义URL输入框。文本框中输入内容不符合URL格式，浏览器将不会允许提交表单。
    21.number：定义只能输入数字的输入框
    22.range：定义拖动条。
            min：指定拖动条的最小值。  max：指定拖动条的最大值。  step：指定拖动条的步长。
    23.search：定义用于输入搜索关键字的文本框。与不同文本框没有太大区别。
##### 属性
    1.checked：设置单选框、复选框初始状态是否为选中状态。checked="checked"
    2.disabled：首次加载时禁用元素。元素无法获得焦点、无法选中、无法在其中输入文本、无法响应点击时间。disabled="disabled"
    3.maxlength：指定文本框中所允许输入的最大字符串。maxlength="number"
    4.readonly：指定文本框内的值不允许用户修改。
    5.size：指定元素的宽度。
    6.src：指定显示图像的URL。
    7.form：定义表单控件所属表单。允许表单控件在<form>外，属性值为所属表单的id。
    8.formaction：允许通过设置属性值，使一个表单中不同提交按钮提交到不同的action。
    9.formenctype：让按钮动态地改变表单的enctype值。
    10.formmethod：让按钮动态地设置表单以POST或GET方式提交。
    11.formtarget：让按钮动态地改变表单的target属性。
    12.autofocus：使表单控件自动获得焦点。一个页面最多只能有一个表单控件设置。
    13.placeholder：为文本域设置提示信息。
    14.list：将文本框与下拉菜单结合，既允许用户输入，也允许用户通过下拉菜单选择。属性值应为一个<datalist.../>的id。（<datalist.../>相当于一个看不见的<select.../>）
#### 使用label元素定义标签
    定义标签对其他可生成请求参数的表单控件元素进行说明。
    当用户点击<label.../>所生成的标签时，该标签关联的表单控件元素就会获得焦点。
    隐式关联：设置for属性值为所关联表单控件的id值。
    显示关联：将普通文本、表单控件放入一个<label.../>内部即可。
    当用户点击<label.../>时，所关联的表单控件获得输入焦点。
#### 使用button元素定义按钮
    定义一个按钮。内部可包含普通文本、格式化标签、图像等内容。
    type：button、reset、submit其中之一。
#### 列表框和下拉菜单
    <select.../>元素用于创建列表框或下拉菜单，必须与<option.../>元素结合使用，每个<option.../>元素代表一个列表项或菜单项。
    用户选定列表项或菜单项或，这些列表项或菜单项的value值将作为该 <select.../>元素所对应的请求参数值。
        multiple：设置是否允许多选。
        size：显示列表项的数量。

    <option>用于定义列表框选项或菜单项。
        selected：初始状态是否被选中。
        value：选项对应的请求参数值。
    <optgroup.../>用于定义列表项或菜单项组。只能包含<option.../>元素。
        label：该选项组的类名。
#### 使用textarea元素定义文本域
    定义多行文本域。
    cols：文本域的宽度。    rows：文本域的高度。
#### 使用output元素
    不会生成请求参数，只用于显示输出。
    for：指定将会显示哪个元素的值
- - -
### 文件上传域
- - -
HTML5允许多文件上传，而且HTML5允许客户端Javascript访问实际的文件内容。

    <input id="images" type="file" multiple accept="image/*"> 上传多个图像文件。
    accept属性仅用于客户端过滤，应同时在服务器端对文件进行过滤。
    1.JavaScript通过file属性访问文件上传域内的所有文件，返回一个FileList对象。
        var imageEle = document.getElementById("images");
        var fileList = imageEle.files;
    2.FileList对象相当于一个数组，可以使用类似于数组的方法来访问该数组内的每个File对象。
        for(var i = 0 ; i < fileList.length ; i++){
            var file = fileList[i];
        }
    3.File对象包含如下常用属性：
        name：返回该对象对应文件的文件名。
        type：返回该对象对应文件的MIME类型字符串。
        size：返回该对象对应文件的大小。
读取文件本身内容

    FileReader同样是一个JavaScript对象，可以通过该对象在客户端读取文件上传域所选择的文件内容。
    FileReader提供了如下方法：
        1.readAsText(file,encoding)：以文本文件的方式来读取该文件，其中 encoding参数指定读取该文件时所用的 字符集，该参数默认为UTF-8。
        2.readAsBinaryString(file)：以二进制方式读取该文件。
        3.readAsDataURL(file)：以DataURL方式来读取文件。
        4.abort()：停止读取。
    读取方法都为异步方法，需要以事件监听的方式来获取读取的结果。
        onloadstart：FileReader开始读取数据事件。
        onprogress：FileReader正在读取数据事件。（可用于实时监控文件的读取进度）
        onload：FileReader成功读取数据事件。
        onloadend：FileReader读取数据完成事件（无论成功失败）。
        onerror：FileReader读取失败时间。
    FileReader只是客户端的JavaScript对象，所进行的上传只是把磁盘上的文件读到浏览器内存中，并未真正上传到服务器。
- - -
### HTML5客户端校验
- - -
#### 校验属性校验
    required：指定表单控件必须填写。
    pattern：指定表单控件的值必须符合指定的正则表达式。
    min、mas、step：只对数值类型。日起类型有效，控制控件值的最小值、最大值、步长。
#### checkValidity方法校验
    当表单控件均可以通过输入校验时，checkValidity()返回true。
    HTML5还为所有表单、表单控件提供了calidity属性，该属性的值为ValidityState对象，其中的valid属性可以表示是否通过输入校验。
#### 自定义错误提示
    只有当表单控件本身没有通过输入校验时，才可以调用setCustomValidity()方法。
        document.getElementById("表单控件id").setCustomValidity("错误提示信息");
#### 关闭校验
    1.为<form.../>元素增加novalidate属性。（关闭表单的输入校验功能）
    2.为提交按钮元素设置formnovalidate属性。（关闭指定提交按钮的输入校验功能）