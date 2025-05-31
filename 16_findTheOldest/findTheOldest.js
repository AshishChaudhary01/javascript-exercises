const findTheOldest = function(people) {
  const currentDate = new Date().getFullYear();
  people.forEach(person => {
    if ("yearOfDeath" in person) {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }else{
      person.age = currentDate - person.yearOfBirth;
    }
  });

  const oldest = people.reduce(
    (old, current) => 
      (old && old.age > current.age) ? old : current
  );
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
