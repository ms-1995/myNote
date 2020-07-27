abstract class PrintHelper {
  printInfo() => print(getInfo());
  getInfo();
}

class Meta {
  double price;
  String name;
  int number;
  Meta(this.name, this.price, this.number);
  Item operator +(Item item) => Item(name + item.name, price * number + (item.price * item.number), number + item.number);
}

class Item extends Meta {
  Item(name, price, number) : super(name, price, number);
}

class ShoppingCart extends Meta with PrintHelper {
  DateTime date;
  String code;
  List<Item> bookings;

  double get price =>
      bookings.reduce((value, element) => value + element).price;

  int get number =>
      bookings.reduce((value, element) => value + element).number;

  ShoppingCart({name}) : this.withCode(name: name, code: null);
  ShoppingCart.withCode({name, this.code})
      : date = DateTime.now(),
        super(name, 0, 1);

  getInfo() => '''
  购物车信息：
  ----------------
  商品名 单价 数量 总价
  ----------------
  ${bookings.map((item) => '${item.name} ${item.price} ${item.number} ${item.price * item.number}').join('\n')}
  ----------------
  用户名：$name
  优惠码：${code ?? '无'}
  数量：$number
  总价：$price
  日期：$date
  ----------------
  ''';
}

void main() {
  ShoppingCart.withCode(name: '用户', code: 'qqqqq')
    ..bookings = [Item('图书', 1.0, 2), Item('食品', 11.1, 3)]
    ..printInfo();

  ShoppingCart(name: '李四')
    ..bookings = [Item('香蕉', 15.0, 1), Item('西瓜', 40.0, 1)]
    ..printInfo();
}
