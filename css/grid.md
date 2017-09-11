### Grid布局

    display: grid;
    height: 150px;
    grid-template-columns: 1fr 2fr 3fr 4fr;//设置每列宽度，有几个参数就有几列
    grid-template-rows: minmax(100px,200px) minmax(50px,200px);//设置每行高度
    grid-column-gap: 10px;//设置列与列的间距
    grid-row-gap: 5px;//设置行与行的间距
    //grid-gap: 1px 2px; //第一个参数为row，第二个参数为column

#### grid-template-columns和rows设置

* fr代表按比例自适应容器宽度
* minmax设置行高的最大值和最小值
* repeat(x,y) x:网格内单元格重复的次数，y:每个轨道的尺寸

#### 设置指定grid子元素的位置或合并单元格

    grid-row-start: 1;//列起始位置为第一个格子
    grid-row-end: 3;//列在第三个格子前结束
    grid-column-start: 2;//行起始位置为第二个格子
    grid-column-end: 3;//列在第三个格子前结束
    //grid-area: 1/2/3/3;//四个参数依次为grid-row-start，grid-column-start，grid-row-end， grid-column-end

grid-row: 2 / span 3;

grid-column: span 2;span后面为合并的列数或行数

