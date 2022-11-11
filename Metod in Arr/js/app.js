const numArr =[2,32,1234,54,222];

let value;
value = numArr.length;
value = Array.isArray(numArr);//являерся ли это массивом
value = numArr.indexOf(32);///поиск по моссиву
value = numArr.push(32);//добаляет новый элимент в конец 
value = numArr.pop();//удаляет последний элемент из массива и возвращает его значение.
value = numArr.unshift(32);//удаляет первый элимент массива
value = numArr.shift(32);//добалвяет в начало
value = numArr.slice(0,2);//возвращает новый массив, содержащий копию части исходного массива
value = numArr.splice(1,1,)//удлаения с масиива элименты
value = numArr.splice(1,0,"0NE",'TWO');//изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
value = numArr.reverse();//переворачивает массив
value = numArr.concat(numArr);//Cклеивания двух массива в один
value = numArr.join(' ');//C массива в строку
value = "hello world".split(''); //cо строки в ммассив
console.log(value);

