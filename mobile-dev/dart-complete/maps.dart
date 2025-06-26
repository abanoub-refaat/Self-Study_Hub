void main() {
  // Maps are key value pairs.
  var toppings = {"Abanoub": "pepperoni", "Bob": "Cheese"};
  print(toppings);
  print(toppings["Bob"]);

  // print values and keys
  print(toppings.values);
  print(toppings.keys);

  // length of the map
  print(toppings.length);

  // Add somthing
  toppings["Bebo"] = "Sausage";

  // Add many elements at once
  toppings.addAll({"Boba": "Becan", "Aba": "Supreme"});
  print(toppings);
  print(toppings.length);

  // remove something or remove all
  toppings.remove("Aba");
  print(toppings);

  toppings.clear();
  print(toppings);
}
