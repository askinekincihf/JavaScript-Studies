const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for (let i = 0; i < companies.length;i++){
//       console.log(companies[i]);
//   }

// forEach

//   companies.forEach(function(company){
//       console.log(`${company.name} was established in ${company.start} and closed in", company.end`)
//       console.log("-----------")
//   })

// FILTER *****************
//getting 21 and older

//first solution;
// let canDrink =[];
// for(let i=0; i < ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

//second solution;
// const mayDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });

// console.log(mayDrink);

//third and the best solution;
// const canDrink = ages.filter(oneMemberInTheArray=> oneMemberInTheArray >= 21);

// console.log(canDrink);

//Filtering retail companies;

// const retailCompanies = companies.filter(company => company.category ==='Retail' )

// console.log(retailCompanies)

//Getting 80s companies

// const companyEighty = companies.filter(abc => (abc.start >= 1980 && abc.start < 1990))

// console.log(companyEighty)

//Getting companies that lasted more than ten years

// const compTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(compTenYears)


// let autoCompanies = companies.filter(abc=>  abc.category =='Auto')

// console.log(autoCompanies)


//MAP ***************

// Create array of company names

// const companyNames = companies.map(company=>`${company.name} : [${company.start} - ${company.end}]`);

// console.log(companyNames)

// const agesTimesTwo = ages.map(age =>age*2)
// console.log(agesTimesTwo)

// const agesSquare = ages.map(age =>Math.sqrt(age))
// console.log(agesSquare)

//SORT *****************

//sort companies by start year ???
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 :-1))

// console.log(sortedCompanies)


//sort ages lowest to highest

// const sortAgesFromLow = ages.sort((a,b)=> a -b)
// const sortAgesFromHigh = ages.sort((a,b)=> b -a)


// console.log(sortAgesFromLow)
// console.log(sortAgesFromHigh)


//REDUCE  ****************

// const ageSum = ages.reduce ((a, b) => a + b, 0);

// console.log(ageSum)


//get total years for all companies

// const totalYears = companies.reduce((a,b) => a + (b.end - b.start) ,0)

// console.log(totalYears)

// const combined = ages
//     .map(age => age * 2)
//     .filter(age => age >= 40)
//     .sort((a, b) => a - b)
//     .reduce((a, b) => a + b, 0)


// console.log(combined)








