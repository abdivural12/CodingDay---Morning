var items = [
    {
        "id": 1,
        "name": "Abdi"
    },
    {
        "id": 2,
        "name": "Susanne"
    },
    {
        "id": 3,
        "name": "Halil"
    },
    {
        "id": 253,
        "name": "Seyhmus"
    },
    {
        "id": 4,
        "name": "Marie"
    },
    {
        "id": 5,
        "name": "Alex"
    },
    {
        "id": 6,
        "name": "Eliese"
    }
]
function dynamicSort(property) {
    return function(a, b) {
        return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
    }
 }
 
 items.sort(dynamicSort('name')).sort(dynamicSort('id'));
 console.log(items);
 items.sort(dynamicSort('id')).sort(dynamicSort('name')); 
 console.log(items);  