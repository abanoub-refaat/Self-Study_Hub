void main() {
  // create person class
  Person p1 = Person();

  // adding data
  p1.AddData("Mina", "Female", 4, 95);
  p1.showData();
}

class Person {
  String? name, sex;
  int? age, weight;

  // constructor
  void AddData(String name, sex, int age, int weight) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.weight = weight;
  }

  // methods
  void showData() {
    String addjec = ((weight ?? 40) > 60) ? "Fat" : "Thin";
    print(
      "the person's name is $name, they are $sex, $age years old, and their weight is: $weight they are $addjec",
    );
  }
}
