const products = [
	{ id: 1, title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: './img/ThinkPad_x280.png' },
	{ id: 2, title: 'Apple Macbook Pro', price: 2500.00, qty: 1, image: './img/MacBook-Pro.png' },
	{ id: 3, title: 'Amazon Kindle Ebook', price: 150.00, qty: 1, image: './img/Amazon_Kindle.png' },
	{ id: 4, title: 'USB-C to HDMI cable', price: 10, qty: 1, image: './img/usbC_to_hdmi.jpg' },
];

const formatNumber = (n, c = 2, d = '.', t = ',') => {
	const s = n < 0 ? '-' : '',
		i = String(parseInt(n = Math.abs(+n || 0).toFixed(c))),
		j = i.length > 3 ? i.length % 3 : 0;
	return s + (j ? i.slice(0, j) + t : '') + i.slice(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

// Your Code goes here
const app = Vue.createApp({
	data() {
		return {
			products,
			cartItems: [],
		};
	},
	methods: {
		addToCart(product) {
			let found = this.cartItems.find(item => item.id === product.id);
			if (found) {
				found.qty += product.qty;
			}
			else {
				this.cartItems.push({ ...product });
			}
		},
		formatCurrency(value) {
			return "$" + formatNumber(value, 2, '.', ',')
		}
	},
}
);
app.component('shopping-cart', {
	props: ['items'],
	computed: {
		Total() {
			return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
		}
	},
	methods: {
		formatCurrency(value) {
			return "$" + formatNumber(value, 2, '.', ',')
		},
		removeItem(index) {
			this.items.splice(index, 1);
		}
	},
	template: `
   					 <div>
                        <table class="table table-cart">
                           <tr v-for="(item, index) in items" :key="item.id">
                              <td>{{item.title}}</td>
                              <td style="width:120px">QTY:
                                 <input v-model="item.qty" class="form-control input-qty" type="number">
                              </td>
                              <td class="text-right">{{ formatCurrency(item.price) }}</td>
                              <td>
                                 <button @click="removeItem(index)"><span> Remove </span></button>
                              </td>
                           </tr>
                           <tr v-show="items.length === 0">
                              <td colspan="4" class="text-center">Cart is empty</td>
                           </tr>
                           <tr v-show="items.length > 0">
                              <td></td>
                              <td class="text-right">Cart Total</td>
                              <td class="text-right">{{ formatCurrency(Total)}}</td>
                              <td></td>
                           </tr>
                        </table>
                     </div>
  `
});
app.mount('#app');