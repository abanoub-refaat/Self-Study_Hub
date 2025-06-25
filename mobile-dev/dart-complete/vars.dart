void main(){
  // ============= Variables =============

  /*
  Even in type-safe Dart code, you can declare most variables without explicitly specifying their type using `var`. Thanks to type inference, these variables' types are determined by their initial values:
  
  Variables store references. The variable called name contains a reference to a String object with a value of "Bob".

  */

  var test = "Bob";

  // Strings
  String name = "Abanoub";

  // Integers
  int x = 41;

  // Dynamic
  dynamic firstName = "Bob".

  // ============= const and final =============

  // use const if you know what the value is at compile time
  const String fullName = "Abanoub Refaat";

  // use final if you know what the value is at runtime
  final String nickName = "J";

  // declaring and not using is possible
  var yourName;

  // Null safty
  String? test1  // Nullable type. Can be `null` or string.

  String test2   // Non-nullable type. Cannot be `null` but can be string.

  print(yourName); // null
}