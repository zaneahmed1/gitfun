function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, friendo) {
    person.friends.push(friendo);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };