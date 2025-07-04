void main() {
  // type conversion

  var a, b, c;
  a = 40;
  b = "1";
  // str -> int
  c = a + int.parse(b);
  print("$a + $b = $c");

  // str -> double
  var d, e, f;
  d = 40;
  e = "0.1";
  f = d + double.parse(e);
  print("$d + $e = $f");

  // int -> str (concatination)
  var g, h, i;
  g = 40;
  h = "1";
  i = g.toString() + h;
  print("$g + $h = $i");
}
