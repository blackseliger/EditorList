import { crmListGoods } from './app';

const addNewProduct = function(name, price) {
    crmListGoods.insertAdjacentHTML('beforeend', `<div class="line" data-testid="name-line">
        <div class="name-line">
            ${name}
        </div>
        <div class="price-line">
            ${price}
        </div>
        <div class="action-line">
            <div class="edit-line">
                ✎
            </div>
            <div class="delete-line">
                ✕
            </div>
        </div>
    </div>`)
}

export { addNewProduct };