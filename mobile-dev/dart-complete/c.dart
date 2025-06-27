void main() {
  // create person class
  Person p1 = Person("Abanoub", "male", 21);
  Person p2 = Person("Fady", "female", 21);

  p1.showData();
  p2.showData();
}

class Person {
  String? name, sex;
  int? age;

  // constructor
  Person(String name, sex, int age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
  }

  // methods
  void showData() {
    print("the person's name is $name, they are $sex, and $age years old");
  }
}
