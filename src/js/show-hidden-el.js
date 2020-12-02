
const show = function(element) {
    if (element.classList.contains('block-hidden')) {
        const testAttr = element.getAttribute('data-id');
        element.classList.remove('block-hidden');
        element.setAttribute('data-testId', `show-block-${testAttr}`);
    }
}

const hide = function(element) {
    if (element.classList.contains('block-hidden') === false) {
        const testAttr = element.getAttribute('data-id');
        element.classList.add('block-hidden');
        element.setAttribute('data-testId', `hide-block-${testAttr}`);
    }
}

const findHide = function(elementArray) {
    elementArray.forEach(element => {
        if (element.classList.contains('block-hidden') === false) {
            element.classList.add('block-hidden');
        }        
    });
}

export { show, hide, findHide };