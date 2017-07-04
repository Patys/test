
class toolbar {
  constructor(options) {
    this.message = options.message;
    this.close = options.close;
    this.clickOk = options.clickOk;
    this.position = options.position;

    this.root = null;
    this.gap = -100;

    this.create();
  }

  create() {
    this.createRoot();

    let text = document.createElement('div');
    text.style.color = '#fff';
    text.style.float = 'left';
    text.style.textAlign = 'left';
    text.style.marginLeft = '10px';
    text.innerHTML = this.message;

    let buttonOk = document.createElement('button');
    buttonOk.innerHTML = "Ok?";
    buttonOk.style.display = 'inline';
    buttonOk.style.backgroundColor = '#4CAF50';
    buttonOk.style.padding = '10px 24px';
    buttonOk.style.borderRadius = '6px';
    buttonOk.style.border = '0px';
    buttonOk.style.marginLeft = '15px';
    buttonOk.addEventListener('click', this.clickOk);

    let buttonX = document.createElement('button');
    buttonX.innerHTML = "x";
    buttonX.style.float = 'right';
    buttonX.style.display = 'inline';
    buttonX.style.backgroundColor = '#f44336';
    buttonX.style.padding = '5px 10px';
    buttonX.style.borderRadius = '3px';
    buttonX.style.border = '0px';
    buttonX.addEventListener('click', () => {
      this.moveOutRoot();
      this.close();
    });

    this.addElement(text);
    this.addElement(buttonOk);
    this.addElement(buttonX);

    document.body.appendChild(this.root);
  }

  createRoot() {
    this.root = document.createElement('div');
    this.root.style.position = 'fixed';
    // this.root.style.height = '40px';
    this.root.style.width = '98%';
    this.root.style.display = 'inline-block';
    this.root.style.backgroundColor = '#333';
    // this.root.style.textAlign = 'center';
    this.root.style.lineHeight = '40px';
    this.root.style.verticalAlign = 'middle';
    this.root.style.padding = '5px';
    this.root.style.marginRight = '5px';
    this.root.style.fontFamily = 'Lucida Sans Unicode';
    this.moveInRoot();
  }

  addElement(el) {
    this.root.appendChild(el);
  }

  moveInRoot() {
    if(this.position === 'top') {
      this.moveInRootTop();
    } else {
      this.moveInRootBottom();
    }
  }

  moveInRootTop() {
    let s = this.root.style;
    let counter = this.gap;
    let timeout = null;
    (function fade() {
      if(counter < 0) {
        timeout = setTimeout(fade,5);
        counter += 1;
      } else {
        clearTimeout(timeout);
      }
      s.top = `${counter}px`;
    })();
  }

  moveInRootBottom() {
    let s = this.root.style;
    let counter = this.gap;
    let timeout = null;
    (function fade() {
      if(counter < 0) {
        timeout = setTimeout(fade,5);
        counter += 1;
      } else {
        clearTimeout(timeout);
      }
      s.bottom = `${counter}px`;
    })();
  }

  moveOutRoot() {
    if(this.position === 'top') {
      this.moveOutRootTop();
    } else {
      this.moveOutRootBottom();
    }
  }

  moveOutRootTop() {
    let s = this.root.style;
    let counter = 0;
    let timeout = null;
    let gap = this.gap;
    (function fade() {
      if(counter > gap) {
        timeout = setTimeout(fade,5);
        counter -= 1;
      } else {
        clearTimeout(timeout);
      }
      s.top = `${counter}px`;
    })();
  }

  moveOutRootBottom() {
    let s = this.root.style;
    let counter = 0;
    let timeout = null;
    let gap = this.gap;
    (function fade() {
      if(counter > gap) {
        timeout = setTimeout(fade,5);
        counter -= 1;
      } else {
        clearTimeout(timeout)
      }
      s.bottom = `${counter}px`;
    })();
  }
}
