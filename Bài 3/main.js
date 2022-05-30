function chekNegativeIteger(array) {
    let count = 0;
    for (const value of array) {
        if (parseInt(value) && value % 1 === 0 && value < 0 || value === "a" || value === "o" || value === "e" || value === "u" || value === "i") {
            console.log(value);
            count++;
        }
    }
    if (count === 0) {
        console.log("Hàm không có số nguyên âm nào");
        return false;
    }
}

chekNegativeIteger([5, "a", "d"]);