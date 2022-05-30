const ptb1 = (a, b) => {
    let x = -b / a;
    if (a === 0) {
        console.log(`a phải khác giá trị 0`);
    } else if (a === 0 && b > 0 && b < 0) {
        console.log(`Phương trình vô số nghiệm`);
    }
    if (a === 0 && b === 0) {
        console.log(`Phương trình có vô số nghiệm`);
    } else {
        console.log(`PT có nghiệm duy nhất là : ${x}`);
    }

}
ptb1(5,8);