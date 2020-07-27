/**
 * 浮点数相加时会先转换成二进制相加后，再转回十进制
 * 二进制转换时会出现精度丢失出现浮点误差
 */

 /**
  * 数据展示类
  */
  function strip(num: number, precision: number = 12): number {
      return +parseFloat(num.toPrecision(precision)) // toPrecision() 方法可在对象的值超出指定位数时将其转换为指数计数法。
  }

  /**
   * 数据运算类
   */
  function add(num1: number, num2: number): number {
      const num1Digits: number = (num1.toString().split('.')[1] || '').length
      const num2Digits: number = (num2.toString().split('.')[1] || '').length
      const baseNum: number = Math.pow(10, Math.max(num1Digits, num2Digits)) // Math.pow(2,3)===8 2的3次幂
      return (num1 * baseNum + num2 * baseNum) / baseNum
  }