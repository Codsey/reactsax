const isColor = (color: string) => {
  const rsColors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'dark',
    'light',
    'warn',
    // social colors
    'facebook',
    'twitter',
    'youtube',
    'pinterest',
    'linkedin',
    'snapchat',
    'whatsapp',
    'tumblr',
    'reddit',
    'spotify',
    'amazon',
    'medium',
    'vimeo',
    'skype',
    'dribbble',
    'slack',
    'yahoo',
    'twitch',
    'discord',
    'telegram',
    'google-plus',
    'messenger'
  ];
  return rsColors.includes(color);
};

const setVar = (propertyName: string, value: string, el: any) => {
  if (!el) {
    document.documentElement.style.setProperty(`--rs-${propertyName}`, value);
  } else {
    if (el.nodeName !== '#comment') {
      el.style.setProperty(`--rs-${propertyName}`, value);
    }
  }
};

const setColor = (
  colorName: string,
  color: string,
  el: any,
  addClass?: boolean
) => {
  function hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(
      shorthandRegex,
      (m: any, r: string, g: string, b: string) => {
        return r + r + g + g + b + b;
      }
    );

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    console.log(result);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  const isRGB = /^(rgb|rgba)/.test(color);
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
    color
  );
  const isHEX = /^(#)/.test(color);
  let newColor;

  if (color === 'dark') {
    el.classList.add('rs-component-dark');
  }

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('rs-change-color');
    }
  } else if (isHEX) {
    const rgb = hexToRgb(color);
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('rs-change-color');
    }
  } else if (isColor(color)) {
    const style = getComputedStyle(document.body);
    newColor = style.getPropertyValue('--rs-' + color);
    setVar(colorName, newColor, el);
    if (addClass) {
      el.classList.add('rs-change-color');
    }
  } else if (isRGBNumbers) {
    setVar(colorName, color, el);
    if (addClass) {
      el.classList.add('rs-change-color');
    }
  }
};
// TODO: DRY CODE PLEASE.
const setComponentColor = (color: string) => {
  function hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(
      shorthandRegex,
      (m: any, r: string, g: string, b: string) => {
        return r + r + g + g + b + b;
      }
    );

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }

  const isRGB = /^(rgb|rgba)/.test(color);
  const isRGBNumbers = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
    color
  );
  const isHEX = /^(#)/.test(color);
  let newColor;

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',');
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`;
    return newColor;
  } else if (isHEX) {
    const rgb = hexToRgb(color);
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`;
    return newColor;
  } else if (isColor(color)) {
    const style = getComputedStyle(document.body);
    newColor = style.getPropertyValue('--rs-' + color);
    return newColor;
  } else if (isRGBNumbers) {
    return color;
  }
};

let lastId = 0;
const generateID = (prefix = 'id') => {
  lastId++;
  return `${prefix}${lastId}`;
};

const insertBody = (element: HTMLElement, parent: any) => {
  const target = parent ? parent : document.body;
  target.insertBefore(element, target.lastChild);
};

const removeBody = (element: HTMLElement, parent: any) => {
  const target = parent ? parent : document.body;
  target.removeChild(element);
};

const setCords = (element: any, parent: any) => {
  const cords = parent.getBoundingClientRect();
  const x = cords.x;
  const y = cords.y;
  const w = cords.width;
  const h = cords.height;
  const style = element.style;
  const scrollTop = window.pageYOffset;
  const elTop = element.clientHeight + cords.y + scrollTop;
  const rootTop = scrollTop + window.innerHeight;

  if (rootTop - elTop < 30) {
    // console.log('hola mundo')
    style.top = `${y + scrollTop - element.clientHeight - 4}px`;
    style.left = `${x}px`;
    style.width = `${w}px`;
    element.classList.add('top');
    parent.classList.add('top');
  } else {
    style.top = `${y + scrollTop + h - 4}px`;
    style.left = `${x}px`;
    style.width = `${w}px`;
    element.classList.remove('top');
    parent.classList.remove('top');
  }
};

const setCordsPosition = (element: any, parent: any, position: string) => {
  const cords = parent.getBoundingClientRect();
  const x = cords.x;
  const y = cords.y;
  const w = cords.width;
  const h = cords.height;
  const style = element.style;
  const scrollTop = window.pageYOffset;
  const elTop = element.clientHeight + cords.y + scrollTop;
  const rootTop = scrollTop + window.innerHeight;

  if (
    x + w + 10 + element.getBoundingClientRect().width > window.innerWidth &&
    position === 'right'
  ) {
    position = 'left';
    element.classList.remove('right');
    element.classList.add('left');
  }

  if (x - 10 < element.getBoundingClientRect().width && position === 'left') {
    position = 'top';
    element.classList.remove('left');
    element.classList.add('top');
  }

  if (rootTop - elTop < 30 || position === 'top') {
    // console.log('hola mundo')
    style.top = `${y + scrollTop - element.clientHeight - 8}px`;
    const left = x + (w - element.getBoundingClientRect().width) / 2;

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`;
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position === 'bottom') {
    style.top = `${y + scrollTop + h + 8}px`;
    const left = x + (w - element.getBoundingClientRect().width) / 2;

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`;
      } else {
        style.left = '10px';
        element.classList.add('notArrow');
      }
    } else {
      style.left = 'auto';
      style.right = '10px';
      element.classList.add('notArrow');
    }
  } else if (position === 'left') {
    style.top = `${y +
      scrollTop +
      (h - element.getBoundingClientRect().height) / 2}px`;
    style.left = `${x - element.getBoundingClientRect().width - 8}px`;
  } else if (position === 'right') {
    style.top = `${y +
      scrollTop +
      (h - element.getBoundingClientRect().height) / 2}px`;
    style.left = `${x + w + 8}px`;
  }
};

const setDarkMode = () => {
  document.body.setAttribute('rs-theme', 'dark');
};

export {
  setColor,
  setVar,
  isColor,
  insertBody,
  removeBody,
  setCords,
  setCordsPosition,
  setComponentColor,
  setDarkMode,
  generateID
};
