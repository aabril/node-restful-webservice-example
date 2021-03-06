var User = function User(parameters) {
  for (var i in parameters) {
    this[i] = parameters[i];
  }
};

var simple_database = [
  { id: 1, name: "Attila" },
  { id: 2, name: "Dain" },
  { id: 3, name: "Rob" }
];

module.exports = {
  find: function(id) {
    for (var i in simple_database) {
      var record = simple_database[i];
      if (record.id == id) {
        return new User(record);
      }
    }
    return null;
  }
}