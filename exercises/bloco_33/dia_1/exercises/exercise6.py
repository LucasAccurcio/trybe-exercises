# Crie uma função que receba os três lado de um triângulo e informe qual o
#  tipo de triângulo formado ou "não é triangulo", caso não seja possível
#  formar um triângulo.
# Dica:

# Três lados formam um triângulo quando a soma de quaisquer dois lados for
#  maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.

def is_triangle(a, b, c):
    if a + b < c or a + c < b or b + c < a:
        return "Não é um triângulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b != c or a == c != b or b == c != a:
        return "Triângulo Isósceles"
    return "Triângulo Escaleno"


print(is_triangle(3, 4, 5))
