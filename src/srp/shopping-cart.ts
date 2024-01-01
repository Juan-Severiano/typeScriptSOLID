type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Bolsa', price: 455.67 });
shoppingCart.addItem({ name: 'Lápis', price: 3.67 });
shoppingCart.addItem({ name: 'Caneta', price: 5.0 });
shoppingCart.addItem({ name: 'Caderno', price: 25.67 });
shoppingCart.addItem({ name: 'Borracha', price: 3.5 });

console.log(shoppingCart);
