void main() {
  // Lists
  var myList = [1, 2, 3];
  print(myList);
  print(myList[0]);

  // Change an item
  myList[0] = 41;
  print(myList[0]);

  // Create an empty list
  var emptyList = [];
  print(emptyList);

  // Add an element
  emptyList.add(40);

  // Add mulltiple elements
  emptyList.addAll([41, 42, 44]);
  print(emptyList);

  // Insert at a specific position (position, item)
  myList.insert(3, 400);
  print(myList);
  myList.insertAll(2, [55, 55, 55]);

  // Mixed Lists
  var mixedList = [1, 2, 3, "Bob", "Abanoub"];
  print(mixedList);

  // remove form a list
  mixedList.remove("Bob");

  // if there is more than one "Bob" we need to specify the index at which "Bob" do we want to remove.
  mixedList.removeAt(3);
  print(mixedList);
}
