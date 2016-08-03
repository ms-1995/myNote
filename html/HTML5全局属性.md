## HTML5全局属性
- - -

#### accesskey
    规定激活（使元素获得焦点）元素的快捷键。
    以下元素支持accesskey属性：<a>,<area>,<button>,<input>,<label>,<legend>以及<textarea>。
#### class
    规定元素类名。
    class 属性不能在以下 HTML 元素中使用：base, head, html, meta, param, script, style 以及 title。
    可以给HTML元素赋予多个class。
#### contenteditable
    规定元素内容是否可编辑。
    如果未设置，元素会从其父元素继承该属性。
    true：规定元素可编辑。   false：规定元素不可编辑。
#### contextmenu（目前没有浏览器支持...）
    规定元素的上下文菜单。当用户右键点击元素时，会出现上下文菜单。
    将元素中contextmenu的值与要打开的menu元素的id绑定。
    <div contextmenu="mymenu">
        <menu type="context" id="mymenu">
            <menuitem label="Refresh"></menuitem>
            <menuitem label="Twitter"></menuitem>
        </menu>
    </div>
#### data-*
    用于存储页面或应用程序的私有自定义数据。
    存储的自定义数据可以被页面中的javascript利用。
    属性名不可以包含大写字母。
#### dir
    规定元素内容的文本方向。
    dir 属性不能在以下元素中使用：<base>, <br>, <frame>, <frameset>, <hr>, <iframe>, <param> 以及 <script>。
    ltr：默认，从左往右的文本方向。   rtl：从右往左的文本方向。
#### draggable
    规定元素是否可拖动。（链接和图像默认可拖动）
    true：元素可拖动。   false：元素不可拖动。 auto：使用浏览器默认。
#### dropzone（目前没有浏览器支持...）
    规定在元素上拖动数据时，是否拷贝、移动或链接被拖动数据。
    copy：导致被拖数据产生副本。move：导致被拖数据移动到新位置。link：生成指向原始数据的链接。
#### hidden
    规定元素是否可见。
    hidden="true"相当于CSS中设置display:none。
#### id
    规定HTML元素的唯一的id。
    id属性可用作链接锚替代name属性。
#### lang
    规定元素内容的语言。
    lang 属性在以下标签中无效：<base>, <br>, <frame>, <frameset>, <hr>, <iframe>, <param> 以及 <script>。
#### spellcheck
    规定是否对元素进行拼写和语法检查。
    如果检查不通过，浏览器会对拼错的单词进行提示。
#### style
    规定元素的行内样式。
    style属性将覆盖任何全局的样式设定
#### tabindex、
    规定元素的tab键控制次序。
    以下元素支持 tabindex 属性：<a>, <area>, <button>, <input>, <object>, <select> 以及 <textarea>。
    number：tab键控制次序，从1开始。
#### title
    规定有关元素的额外信息。
    通常会在鼠标移到元素上时显示工具提示文本。