void main() {
  // for loop
  var num = 5;
  for (var i = num; i >= 1; i--) {
    print(i);
  }
  print("=======================");

  // for-in loop
  var names = ["Abanoub", "Refaat", "Ibrahim"];
  for (var name in names) {
    print(name);
  }

  print("=======================");

  // while loop
  while (num >= 1) {
    print(num);
    num--;
  }
}
