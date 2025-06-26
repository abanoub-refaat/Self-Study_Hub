void main() {
  String myFunc(String name, [String? name2 = "Friends"]) {
    return "Hello, $name and $name2";
  }

  // Arrow functions.
  bool isEven(int n) => n % 2 == 0;

  print(myFunc("Abanoub"));
  print(isEven(34436));
  print(myFunc("Abanoub", "Refaat"));
}
