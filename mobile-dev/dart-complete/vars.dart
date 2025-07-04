void main() {
  // ============= Variables =============

  /*
  Even in type-safe Dart code, you can declare most variables without explicitly specifying their type using `var`. Thanks to type inference, these variables' types are determined by their initial values:
  
  Variables store references. The variable called name contains a reference to a String object with a value of "Bob".

  */

  var test = "Bob";
  print(test);

  // Strings
  String name = "Abanoub";
  print(name);

  // Integers
  int x = 41;
  print(x);

  // Dynamic
  dynamic firstName = "Bob";
  print(firstName);

  // ============= const and final =============

  // use const if you know what the value is at compile time
  const String fullName = "Abanoub Refaat";

  // use final if you know what the value is at runtime
  final String nickName = "J";

  print(fullName + " " + nickName);

  // declaring and not using is possible
  var yourName;

  // Null safty
  String? test1; // Nullable type. Can be `null` or string.

  print(test1);

  String test2 =
      "cannot be null"; // Non-nullable type. Cannot be `null` but can be string.
  print(test2);
  print(yourName); // null
}
