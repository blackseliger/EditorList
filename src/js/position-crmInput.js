const centerPosition = function(relativeElement, absoluteElement) {
 absoluteElement.style.top = `${relativeElement.offsetTop + relativeElement.offsetHeight / 2 - absoluteElement.offsetHeight / 2}px`;
 absoluteElement.style.left = `${relativeElement.offsetLeft + relativeElement.offsetWidth / 2 - absoluteElement.offsetWidth / 2}px`;
}

export { centerPosition };