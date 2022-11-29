declare global {
  interface String {
    encrypt(): string;
  }
}

// 假加密
String.prototype.encrypt = function () {
  const allEncrpt = parseInt('encrypt', 32).toString() + parseInt(this.toString(), 32).toString() + parseInt('encrypt', 32).toString()
  const independentEncrypt = Array.from(this).map(i => parseInt(i, 32)).join('')
  return Number(allEncrpt + independentEncrypt).toString(16).toLocaleUpperCase()
}

export {}