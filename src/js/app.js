import { hide, show, findHide } from './show-hidden-el';
import { centerPosition } from './position-crmInput';
import { addNewProduct } from './addItemtoList';
import { checkValid, checkPrice } from './checkValidInput';

const addNewItem = document.querySelector('.add-new');
const crmBlockInput = document.querySelector('.crm-block-input');
const crmBlock = document.querySelector('.crm-block');
const inputName = document.querySelector('.input-field-name');
const inputPrice = document.querySelector('.input-price-field');
const crmListGoods = document.querySelector('.crm-list-goods');
const formCrm = document.querySelector('.form-crm');
const buttonSave = document.querySelector('.save-input');
const buttonCancel = document.querySelector('.cancel-input')


// document.addEventListener('DOMContentLoaded', () => {
//     centerPosition(crmBlock, crmBlockInput)
// }) почему позиционирование неверное?

// addNewItem.addEventListener('click', (e) => {
//     if (e) {
//         show(crmBlockInput);
//         centerPosition(crmBlock, crmBlockInput)
//     }
// });

crmListGoods.addEventListener('click', (e) => {
        const element = e.target;
        if (element.classList.contains('edit-line')){
            const editedLine = element.closest('.line'); 
            editedLine.classList.add('edit-now'); // найти по классу
            const priceElement = element.closest('.line').querySelector('.price-line');
            const nameElement = element.closest('.line').querySelector('.name-line');
            inputName.value = nameElement.innerText;
            inputPrice.value = priceElement.innerText;

            show(crmBlockInput);
            centerPosition(crmBlock, crmBlockInput)
        } else if (element.classList.contains('delete-line')){
            const deletedElement = element.closest('.line');
            deletedElement.remove(); 
        }
    });

    addNewItem.addEventListener('click', (e) => {
        if (e) {
            show(crmBlockInput);
            centerPosition(crmBlock, crmBlockInput)
        }
    });


buttonSave.addEventListener('click', (e) => {
    e.preventDefault();
    const editNowElement = document.querySelector('.edit-now');
        if (editNowElement !== null) {
            const nameElement = editNowElement.querySelector('.name-line');
            const priceElement = editNowElement.querySelector('.price-line');
            nameElement.innerText = inputName.value;
            checkPrice()
            const checkPriceEl = checkPrice(inputPrice.value);
            if (checkPriceEl === false) return;
            priceElement.innerText = inputPrice.value;
            editNowElement.classList.remove('.edit-now');
            hide(crmBlockInput);
            formCrm.reset();
            return;
        } else { 
            checkValid();
            const checkPriceEl = checkPrice(inputPrice.value);
            if (checkPriceEl === false) return;
            const check = checkValid();
            if (check) {
                const warningMessages = [...document.querySelectorAll('.warning-message')];
                findHide(warningMessages);
                addNewProduct(inputName.value, inputPrice.value);
                hide(crmBlockInput);
                formCrm.reset();
            }
        }
    return;
})

buttonCancel.addEventListener('click', (e) => {
    e.preventDefault();
    formCrm.reset();
    hide(crmBlockInput);
    return;
})

// formCrm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const element = e.target;
//     const buttonSave = element.querySelector('.save-input');
//     const buttonCancel = element.querySelector('.cancel-input');


//     // buttonCancel.addEventListener('click', (e) => {
//     //     console.log('work?')
//     //     element.reset;
//     //     hide(crmBlockInput);
//     //     return;
//     // })
    
// })

export { crmListGoods, formCrm, inputPrice, inputName, addNewItem };




