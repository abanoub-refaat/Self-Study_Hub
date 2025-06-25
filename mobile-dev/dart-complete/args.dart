void main(List<String> args){
  print(args);

  assert(args.length == 2);
  assert(int.parse(args[0]) == 1);
  assert(args[1] == "test");
}