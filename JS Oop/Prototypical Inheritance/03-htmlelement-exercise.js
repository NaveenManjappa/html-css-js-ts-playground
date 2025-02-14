function HTMLElement(){
  this.click = function() {
    console.log('click');
  }
}

HTMLElement.prototype.focus = function() {
  console.log('focus');
}

const htmlElement = new HTMLElement();

function HTMLSelectElement(items = []){
 
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  }

  this.removeItem = function(item){
    this.items.splice(this.items.indexOf(item),1);
  }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;
HTMLSelectElement.prototype.render = function(){
 return `
 <select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
  </select>
 `;
}

const htmlSelectElement = new HTMLSelectElement([1,2,3]);


function HtmlImageElement(src){
  this.src = src;
}

HtmlImageElement.prototype = new HTMLElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
HtmlImageElement.prototype.render = function() {
  return `<img src="${this.src}">`
}

const elements = [
  new HTMLSelectElement([1,2,3]),
  new HtmlImageElement('http://')
];

for(let element of elements)
  console.log(element.render());
