let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistrated = true;
let runnersAge = 18;

if (runnersAge > 18 && earlyRegistrated) {
  raceNumber += 1000;
}

if (runnersAge > 18 && earlyRegistrated) {
  console.log(`Runner with number ${raceNumber} will race at 9:30 am.`);
} else if (runnersAge > 18 && !earlyRegistrated) {
  console.log(`Runner with number ${raceNumber} will race at 11:00 am.`);
} else if (runnersAge < 18) {
  console.log(`Runner with number ${raceNumber} will race at 12:30 pm.`);
} else {
  console.log(`Runner with number ${raceNumber} should see the registration desk`);
}


