var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  };
  
  if (text) {
    newElement.textContent = text;
  };
};

var elContainer = $_('.container')
var elOpenBtn = $_('.btn-open')
var elCloseBtn = $_('.btn-close')

elOpenBtn.addEventListener('click', () => {
  elContainer.classList.add('open-menu')
})

elCloseBtn.addEventListener('click', () => {
  elContainer.classList.remove('open-menu')
})


