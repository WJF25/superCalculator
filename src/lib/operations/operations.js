export const Operations = {
  "+": function soma(arg) {
    return String(arg.reduce((acc, item) => Number(acc) + Number(item)));
  },
  X: function multiplicacao(arg) {
    return String(arg.reduce((acc, item) => Number(acc) * Number(item)));
  },
  "/": function divisao(arg) {
    return String(arg.reduce((acc, item) => Number(acc) / Number(item)));
  },
  "-": function subtracao(arg) {
    return String(arg.reduce((acc, item) => Number(acc) - Number(item)));
  },
  comparador: function (value) {
    const aOS = [
      "+",
      "-",
      "/",
      "%",
      "X",
      "cos",
      "sen",
      "tan",
      "abs",
      "raiz",
      "pow",
    ];
    return aOS.filter((item) => value.includes(item)).join();
  },
  "%": function porcentagem(value) {
    switch (
      value.includes("+") ||
      value.includes("X") ||
      value.includes("/") ||
      value.includes("-")
    ) {
      case value.includes("+"):
        const result = value.split("+");
        return String(
          Number(result[0]) +
            (Number(result[1].substring(0, result[1].indexOf("%"))) / 100) *
              Number(result[0])
        );

      case value.includes("X"):
        const resultX = value.split("X");
        return String(
          (Number(resultX[0]) *
            Number(resultX[1].substring(0, resultX[1].indexOf("%")))) /
            100
        );

      case value.includes("/"):
        const resultDiv = value.split("/");
        return String(
          (Number(resultDiv[0]) /
            Number(resultDiv[1].substring(0, resultDiv[1].indexOf("%")))) *
            100
        );

      case value.includes("-"):
        const resultSub = value.split("-");
        return String(
          Number(resultSub[0]) -
            (Number(resultSub[1].substring(0, resultSub[1].indexOf("%"))) /
              100) *
              Number(resultSub[0])
        );

      default:
        return null;
    }
  },
  cos: function cosseno(number) {
    return String(Math.cos(Number(number[0])));
  },
  sen: function seno(number) {
    return String(Math.sin(Number(number[0])));
  },
  tan: function tangente(number) {
    return String(Math.tan(Number(number[0])));
  },
  abs: function absoluto(number) {
    return String(Math.abs(Number(number[0])));
  },
  raiz: function raizQuadrada(number) {
    return String(Math.sqrt(Number(number[0])));
  },
  pow: function elevadoAX(number) {
    let arg = number[0].split(",");
    return String(Math.pow(Number(arg[0]), Number(arg[1])));
  },
};
