//В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let arrN = [0 , 1 , 2 , 'd', null, 'e'];


function countEvenOdd (arr){
    let countEven = 0;
    let countOdd = 0;
    let countOther = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            countOther++;
        } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
        }
    }

    return [countEven, countOdd, countOther];
}

let rez = countEvenOdd(arrN);

console.log("Even is " + rez[0]);
console.log("Odd is " + rez[1]);
console.log("Other is " + rez[2]);