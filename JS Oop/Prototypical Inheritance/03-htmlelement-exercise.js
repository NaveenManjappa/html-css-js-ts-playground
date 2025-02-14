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

const htmlSelectElement = new HTMLSelectElement();
