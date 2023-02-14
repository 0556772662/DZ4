var items = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
var counts = {li: 0, span: 0, div: 0, h3: 0, a: 0,}
for (var el of items){
    counts[el]++; items.sort((a, b) => a.length - b.length)
}
console.log(counts)


var array = ['name', 'John', 'lastname', 'Black', 'age', '23',]
for (var newArray of array){
    console.log(newArray);
}












