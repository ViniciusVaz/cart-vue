import { mount } from 'avoriaz'
import product from '_components/product/product-item.vue'

describe('product.vue', () => {
	const component = mount(product)

	it('check vue component', () => {
		expect(component.isVueComponent).toBe(true)
	})

	it('check essentials visual components', () => {
		expect(component.contains('.product-item__info__name')).toBe(true)
		expect(component.contains('.price__value')).toBe(true)
		expect(component.contains('.product-item__button')).toBe(true)
	})

	it('check product functions', () => {
		expect(typeof component.vm.addProduct).toBe('function')
	})
});