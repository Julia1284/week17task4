document.querySelector ('button').addEventListener ('click', () =>{
    let array =[];// задаем путсой массив
    for (i=0; i<10; i++){
        let min = -10;
        let max = 10;
        array.push (Math.floor(Math.random() * (max - min +1)) + min)
    }// добавляем в массив 10 случайных чисел от -10 до 10
    let min = Math.min (...array);//минимальное число массива
    let max = Math.max (...array);// максимальное число массива
    let sumResult = array.reduce ((sum, current) => sum+current) // считаем сумму всех элементов массива
    let average = sumResult/array.length;// считаем среднее
    let multyResult = array.reduce ((multy , current) => multy*current);// перемножаем все элементы массива
    document.querySelector ('#generate').innerHTML = array;
    document.querySelector ('#min').innerHTML = min;
    document.querySelector ('#max').innerHTML = max;
    document.querySelector ('#sum').innerHTML = sumResult;
    document.querySelector ('#average').innerHTML = average;
    document.querySelector ('#multy').innerHTML = multyResult;

})