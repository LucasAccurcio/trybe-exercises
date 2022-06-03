from abc import ABC, abstractmethod
from math import pi as PI


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado * self.lado

    def perimetro(self):
        return 4 * self.lado


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return 2 * (self.base + self.altura)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return PI * self.raio * self.raio

    def perimetro(self):
        return 2 * PI * self.raio

quadrado = Quadrado(5)
print("Área do quadrado:")
print(quadrado.area())
print("Perímetro do quadrado:")
print(quadrado.perimetro())

retangulo = Retangulo(5, 10)
print("Área do retângulo:")
print(retangulo.area())
print("Perímetro do retângulo:")
print(retangulo.perimetro())

circulo = Circulo(15)
print("Área do circulo:")
print(circulo.area())
print("Perímetro do circulo:")
print(circulo.perimetro())