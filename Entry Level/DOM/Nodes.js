// Nodes
// const para = document.createElement('h1');
// const node = document.createTextNode('This is new.');
// para.appendChild(node);

// const element = document.getElementById('div1');
// const p3 = document.getElementById('p3');
// element.insertBefore(para, p2);

const para = document.createElement('h1');
const node = document.createTextNode('This is new.');
para.appendChild(node);

const element = document.getElementById('div1');
const child = document.getElementById('p1');
element.insertBefore(para, child);
