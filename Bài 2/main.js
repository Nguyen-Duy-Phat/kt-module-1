const findNumber = (arr1, number) => {
    let newarr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (number == arr1[i]) {
            newarr.push(i);
        }
    }
    console.log(`Vị trí của ${number} trong mảng là ${newarr},`)
}
let arr = [1, 2, 3, 4, 5, 6, 3, 4, 5, 6];
let number = prompt(`Nhập vào số bạn cần tìm`);
findNumber(arr, number);