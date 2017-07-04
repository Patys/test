
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
    text.style.color = '#f00';
    text.style.float = 'left';
    text.style.textAlign = 'left';
    text.style.marginLeft = '10px';
    text.innerHTML = this.message;

    let buttonOk = document.createElement('button');
    buttonOk.innerHTML = "Ok?";
    buttonOk.style.display = 'inline';
    buttonOk.addEventListener('click', this.clickOk);

    let buttonX = document.createElement('button');
    buttonX.innerHTML = "x";
    buttonX.style.float = 'right';
    buttonX.style.display = 'inline';
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
    this.root.style.height = '40px';
    this.root.style.width = '99%';
    this.root.style.display = 'inline-block';
    this.root.style.backgroundColor = '#ff0';
    this.root.style.textAlign = 'center';
    this.root.style.padding = '5px';
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
    var s = this.root.style;
    var counter = this.gap;
    var timeout = null;
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
    var s = this.root.style;
    var counter = this.gap;
    var timeout = null;
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
    var s = this.root.style;
    var counter = 0;
    var timeout = null;
    var gap = this.gap;
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
    var s = this.root.style;
    var counter = 0;
    var timeout = null;
    var gap = this.gap;
    (function fade() {
      if(counter > gap) {
        timeout = setTimeout(fade,5);
        counter -= 1;
      }
      s.bottom = `${counter}px`;
    })();
  }
}
