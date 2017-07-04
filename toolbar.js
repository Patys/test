
class toolbar {
  constructor(options) {
    this.message = options.message;
    this.close = options.close;
    this.clickOk = options.clickOk;
    this.position = options.position;

    this.create();
  }

  create() {
    let root = document.createElement('div');
    root.style.position = 'fixed';
    root.style.backgroundColor = '#ff0';

    let text = document.createElement('p');
    text.style.color = '#f00';
    text.innerHTML = this.message;

    let buttonOk = document.createElement('button');
    buttonOk.innerHTML = "Ok?";
    buttonOk.addEventListener('click', this.clickOk);

    let buttonX = document.createElement('button');
    buttonX.innerHTML = "x";
    buttonX.addEventListener('click', this.close);

    root.appendChild(text);
    root.appendChild(buttonOk);
    root.appendChild(buttonX);

    document.body.appendChild(root);
  }
}
