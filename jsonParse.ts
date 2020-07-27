// 对象属性替换
function replaceObj(obj) {
    const mapObj = {
        _id: 'id',
        created_at: 'createdAt',
        updated_at: 'updatedAt'
    }
    const newObj = JSON.parse(
        JSON.stringify(obj).replace(
        /_id|created_at|updated_at/gi,
        matched => mapObj[matched])
    )
    return newObj
}

const testObj = {
    _id: 1,
    created_at: '开始时间',
    updated_at: '更新时间',
    content: '内容'
}

replaceObj(testObj)