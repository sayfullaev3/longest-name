let students = ["Farxod", "Azim", "Davlat", "Jasur", "Daler", "Islom", "Sherzod", "Muhammad"];
let longestName = "";

students.forEach(long => {
    if (long.length > longestName.length) {
        longestName = long;
    }
});

console.log(longestName);