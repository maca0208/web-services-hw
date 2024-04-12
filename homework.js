const studentsData = [
    {
        ime: "John",
        fakultet: "FINKI",
        prosek: 8.2,
        grad: "Skopje"
    },
    {
        ime: "Jane",
        fakultet: "FIKT",
        prosek: 9.3,
        grad:"Bitola"
    },
    {
        ime: "Mile",
        fakultet: "Goce Delcev",
        prosek: 7.6,
        grad: "Stip"
    },
    {
        ime:"Oliver",
        fakultet:"FIKT",
        prosek:8.9,
        grad: "Skopje"
    },
    {
        ime: "Timco",
        fakultet: "American College",
        prosek: 9.9,
        grad: "Struga"
    },
    {
        ime: "Trpe",
        fakultet: "FINKI",
        prosek: 10,
        grad: "Ohrid"
    },
    {
        ime: "Marija",
        fakultet: "FINKI",
        prosek: 9.2,
        grad: "Resen"
    },
    {
        ime: "Ana",
        fakultet: "FINKI",
        prosek: 7.2,
        grad: "Skopje"
    },
    {
        ime: "Elena",
        fakultet: "FIKT",
        prosek: 6.0,
        grad: "Bitola"
    },
]

//Task 1
const skopjeStudents = studentsData.filter(student => student.grad === "Skopje");
console.log("Students from Skopje:");
skopjeStudents.forEach(student => console.log(student.ime));

//Task 2
const studentsByProsekAscending = studentsData.slice().sort((a, b) => a.prosek - b.prosek);
console.log("\nStudents sorted by prosek (ascending): ");
console.log(studentsByProsekAscending);

//Task 3
const bestStudentFINKI = studentsData.filter(student => student.fakultet === "FINKI")
                                     .reduce((max, current) => (max.prosek > current.prosek) ? max:current);
console.log("\nBest student from FINKI:");
console.log(bestStudentFINKI);

//Task 4
const worstStudentBitola = studentsData.filter(student => student.grad === "Bitola")
                                       .reduce((min, current) => (min.prosek < current.prosek) ? min:current);
console.log("\nWorst student from Bitola:");
console.log(worstStudentBitola);

//Task 5
const citiesWithAverageProsek = {};
studentsData.forEach(student => {
    if(!citiesWithAverageProsek[student.grad]){
        citiesWithAverageProsek[student.grad] = { totalProsek: student.prosek, count:1};
    } else {
        citiesWithAverageProsek[student.grad].totalProsek += student.prosek;
        citiesWithAverageProsek[student.grad].count++;
    }
});

for(let city in citiesWithAverageProsek){
    citiesWithAverageProsek[city].averageProsek = citiesWithAverageProsek[city].totalProsek / citiesWithAverageProsek[city].count;
}

const sortedCities = Object.entries(citiesWithAverageProsek)
                           .sort((a,b) => b[1].averageProsek - a[1].averageProsek)
                           .map(city => city[0]);
console.log("\nCities sorted by average prosek (descending):");
console.log(sortedCities);