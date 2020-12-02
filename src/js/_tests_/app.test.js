/* eslint-disable no-undef */

import { formCrm, addNewItem } from '../app'
import { checkValid, checkPrice } from '../checkValidInput'

test('checkvalid should return true', () => {
    addNewItem.click();
    const name = formCrm.querySelector('.input-field-name');
    const price = formCrm.querySelector('.input-price-field');
    price.value = 1000;
    name.value = 'Car';
    checkValid();
    const expected = true;
    const received = checkValid();
    expect(received).toEqual(expected);
})
test('checkValid should return false', () => {
    addNewItem.click();
    const name = formCrm.querySelector('.input-field-name');
    const price = formCrm.querySelector('.input-price-field');
    price.value = 1000;
    name.value = 'Car';
    checkValid();
    const expected = true;
    const received = checkValid();
    expect(received).toEqual(expected);
})
test('checkPrice should return true', () => {
    addNewItem.click();
    const name = formCrm.querySelector('.input-field-name');
    const price = formCrm.querySelector('.input-price-field');
    price.value = 1000;
    name.value = 'Car';
    checkPrice()
    const expected = true;
    const received = checkPrice();
    expect(received).toEqual(expected);
})
test('checkPrice should return false', () => {
    addNewItem.click();
    const name = formCrm.querySelector('.input-field-name');
    const price = formCrm.querySelector('.input-price-field');
    price.value = 1000;
    name.value = 'Car';
    checkPrice()
    const expected = false;
    const received = checkPrice();
    expect(received).toEqual(expected);
})