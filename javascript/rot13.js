function rot13(message){
    let input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    let output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('');
    let lookup    = input.reduce((m,k,i) => Object.assign(m, {[k]: output[i]}), {});
    return message.split('').map(x => lookup[x] || x).join('');
  }