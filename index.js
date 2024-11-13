// **** Uppgifter objects **** //

/* #1. Börja med att skapa en skola som ett objekt. Objektet ska existera innuti en variabel som ni namnger med skolans namn för att göra det simpelt.
Skolan ska innehålla egenskaperna: name, address, zipcode, city, students med värdet av en tom array och teachers som en tom array. */
const teknikhögskolan = {
  name: "teknikhögskolan",
  address: "kalkstensvägen 3",
  zipcode: 22478,
  city: "Lund",
  students: [],
  teachers: [],

  // #9
  addTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(`${teacher.name} has been added as a teacher.`);
  },

  // #9
  addStudent(student) {
    this.students.push(student);
    console.log(`${student.name} has been enrolled as a student.`);
  },
};

/* #2. Skapa tre stycken olika ämnen, varje ämne ska vara ett objekt med en variabel motsvarande namnet på ämnet.
Egenskaperna ska vara name, students som en tom array och teacher som ett tomt objekt. */
const engelska = {
  name: "Engelska",
  students: [], // empty array
  teachers: {}, // empty object

  enlistToSubject(student) {
    this.students.push(student);
    console.log(`${student.name} has been enlisted to ${this.name}.`);
  }, // #9
};

const matematik = {
  name: "Matematik",
  students: [],
  teachers: {},
  enlistToSubject(student) {
    this.students.push(student);
    console.log(`${student.name} has been enlisted to ${this.name}.`);
  }, // #9
};

const programmering = {
  name: "Programmering",
  students: [],
  teachers: {},
  enlistToSubject(student) {
    this.students.push(student);
    console.log(`${student.name} has been enlisted to ${this.name}.`);
  }, // #9
};

// #9
function addSubject(subject) {
  this.subjects.push(subject);
  console.log(`${subject.name} has been added to ${this.name}'s subjects.`);
}

/* #3. Skapa fem stycken studenter, där namnet på studenten motsvara variabeln. Egenskaperna ska vara name, age, gender och subjects som en tom array. */
let nicholas = {
  name: "Nicholas",
  age: 30,
  gender: "Male",
  subjects: [],
  addSubject, // #9
};

let wictor = {
  name: "Wictor",
  age: 29,
  gender: "Male",
  subjects: [],
  addSubject, // #9
};

let peter = {
  name: "Peter",
  age: 31,
  gender: "Male",
  subjects: [],
  addSubject, // #9
};

let hannah = {
  name: "Hannah",
  age: 23,
  gender: "Female",
  subjects: [],
  addSubject, // #9
};

let ophelia = {
  name: "Ophelia",
  age: 39,
  gender: "Female",
  subjects: [],
  addSubject, //#9
};

/* #4. Skapa två stycken lärare med namnet som variabel och egenskaperna name och subjects som en tom array. ( [] ) */
let niklas = {
  name: "Niklas",
  subjects: [],
  addSubject, // #9
};

let lars = {
  name: "Lars",
  subjects: [],
  addSubject, // #9
};

// #9
teknikhögskolan.addTeacher(niklas);
teknikhögskolan.addTeacher(lars);
engelska.enlistToSubject(nicholas);
nicholas.addSubject(engelska);

/* #5. Skriv en kodrad där du lägger till ett ämne i en lärares ämnesarray. push() eller unshift() Kommer du ihåg skillnaden på dem två?
Skriv sen ut både läraren och ämnet du valde i konsolen och inspektera dem.
Resonera, hur kan man använda den datan ur ett admins perspektiv på en skola, och tycker du den är komplett? Vad saknas? */
niklas.subjects.push(programmering);
console.log(niklas); // på programmering saknas "niklas". alltså är systemet inte komplett

/* #6. Lägg till en student i ett ämnes studentarray. Skriv ut och inspektera i konsolen. */
engelska.students.push(hannah);
console.log(engelska);

/* #7. För att lösa problematiken i de två senaste uppgifterna så bör man i sådana här fall lägga till kopplingen i båda objekten.
Alltså vi börjar med att lägga till ett ämne i en lärarens ämnesarray, och sen byter vi ut det tomma lärarobjekten i ämnet mot läraren.
Då har vi en referens på båda sidorna. Egentligen är detta något som kallas för en cirkulär referens vilket vi helst vill undvika när vi programmerar,
då kan orsaka krashar i vissa fall, men i syftet för uppgiften så är det ingen fara.
Skapa nu en funktion som heter addSubjectToTeacher som tar emot ett ämne och en lärare, och parar ihop dessa.
Returnera sen läraren så du kan se förändringen i lärarens ämnesarray. */
function addSubjectToTeacher(subject, teacher) {
  teacher.subjects.push(subject);
  console.log(`${subject.name} has been added to ${teacher.name}'s subjects.`);
  return teacher;
}

let updatedTeacher = addSubjectToTeacher(engelska, niklas);
console.log(updatedTeacher);

/* #8. Varför ha en fristående funktion som lägger till ämne till en lärare?
Varför inte bara lägga till en funktion (alltså en metod eftersom funktionen då är kopplad till ett specifikt objekt) i lärarnas objekt som en egenskap? */
/* Det är för att man ska kunna ändra i funktionen senare. */

/* #9. Skapa följande metoder (Någon eller ett par av metoderna kan förekomma flera gånger fast på olika objekt med olika logik)
och lägg in de i rätt typ av objekt: addTeacher, enlistToSubject, addStudent, addSubject */
// CHECK! //

/* #10. Prova att leka runt med alla de skapade metoderna i konsolen och försöka lägga till i de olika objekten. Skriv ut objekten hela tiden och inspektera dem.
Kan du tänka dig någon likhet med ett riktigt adminprogram för en skola där en admin till exempel skriver ut en lista på alla ämnen
för att se vilka respektive lärare som är ansvariga för respektive kurs. */

/* #11. Skapa fler metoder, quitSubject, removeTeacher, relegateStudent, fireTeacher. I vilka objekt hör dessa metoder hemma?
Och om vi till exempel sparkar en lärare, så måste vi ju ta bort lärarens koppling med skolan, och ämnet/ämnerna som läraren undervisar i.
Hur löser vi detta i våra metoder, nu får vi börja tänka oss för lite. */


/* #12. Lek runt med dessa metoder i konsolen. Lägg till lite här och ta bort lite där. Rätt smidigt va? */

/* #13. Ny bygger vi på det lite. För att undvika att behöva anropa massa metoder i konsolen när vi startar om programmet
(vilket händer vid varje redigering av script-filen) så kan vi längst ner i script-filen skapa (alltså den koden läses in sist hela tiden)
logik för att koppla några studenter till skolan, några ämnen till studenterna och några lärare till ämnena och så vidare. Skapa sån logik nu. */

/* #14. Skapa en funktion (OBS, en fristående funktion) , displayAllStudents som loopar igenom skolans alla studenter med hjälp av en for-loop.
Tänk på att en vanlig for..of loop inte fungerar här (varför är det så?). Vi måste använda en for..IN loop, och en for..in loop låter oss loopa igenom ett
objekts egenskaper (även kallad nycklar, keys) och på så sätt kunna koppa åt alla egenskaperna värde. */
// Syntax:
// for(keys in medieinstitutet.students) {/*logik för att printa ut studenterna*/};

/* #15. Skapa nu fler funktioner, displayAllSubjectsOfStudent(student), displayAllStudentsEnlistedToSubject(subject), displayAllTeachers.
Varje funktion bör ha något returvärde. */

/* #16. Bygg ut med ett ytterligare typ av objekt, lägg till objekt som handlar om betyg.
Vilka egenskaper ska dessa ha? Vilka metoder kan behövas i dessa betygsobjekt? Hur ska relationen mellan de andra objekten vara?
Vilka metoder bör finnas i de andra typerna av objekt som behandlar betyg? Försöka lösa detta och inspektera och lek runt med det i konsolen. */