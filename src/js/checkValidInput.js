import { formCrm } from './app'
import { show } from './show-hidden-el';

const checkValid = function() {
    const invalid = [...formCrm.elements].findIndex(o => !o.validity.valid);
    if (invalid !== -1) {
        const hiddenMessage = document.querySelector(`.warning-message-${invalid}`);
        show(hiddenMessage);
        return false;
    }
    return true;
}

const checkPrice = function(price) {
    if (price <= 0) {
        const hiddenMessage = document.querySelector('.warning-message-1');
        show(hiddenMessage);
        return false;
    }

    return true;
}

export { checkValid, checkPrice };