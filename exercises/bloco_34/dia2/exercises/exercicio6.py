# Exercício 6: Você está trabalhando em um sistema de orçamentos
# que faz cálculos de impostos e precisa ser refatorado para adicionar
# novos, que no caso são o PIS (0,65%) e o COFINS (3%).
# Mas durante a refatoração, você se depara com uma má prática de código.
# Encontre essa má prática e a solucione em conjunto com a refatoração.


# class Orcamento:
#     def __init__(self, valor):
#         self.valor = valor

#     def calcular_imposto(self, imposto):
#         if imposto == "ISS":
#             return self.__calcular_iss()
#         elif imposto == "ICMS":
#             return self.__calcular_icms()

#     def __calcular_iss(self):
#         return self.valor * 0.1

#     def __calcular_icms(self):
#         return self.valor * 0.06

# Solução:
from abc import ABC, abstractmethod

class Orcamento:
    def __init__(self, valor):
        self.valor = valor
        self.iss = Iss()
        self.icms = Icms()
        self.pis = Pis()
        self.cofins = Cofins()

    def __str__(self) -> str:
        return f"""
        Cálculo do Orçamento:
        Valor Total = R$ {self.valor}
        ISS: {self.iss.calcular(self.valor)}
        ICMS: {self.icms.calcular(self.valor)}
        PIS: {self.pis.calcular(self.valor)}
        COFINS: {self.cofins.calcular(self.valor)}
        """

class Imposto(ABC):
    @abstractmethod
    def calcular(self, valor):
        raise NotImplementedError

class Iss(Imposto):
    def calcular(self, valor):
        return valor * 0.1

class Icms(Imposto):
    def calcular(self, valor):
        return valor * 0.06

class Pis(Imposto):
    def calcular(self, valor):
        return valor * 0.0065

class Cofins(Imposto):
    def calcular(self, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(orcamento)
# print(f"ISS: {orcamento.calcular_imposto('ISS')}")
# print(f"ICMS: {orcamento.calcular_imposto('ICMS')}")
