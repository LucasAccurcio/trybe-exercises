from abc import ABC, abstractmethod


class Alarme:
    def __init__(self):
        self.__rotina = []

    def adicionar_rotinas(self, rotina):
        self.__rotina.append(rotina)

    def acionar_todas_rotinas(self):
        for rotina in self.__rotina:
            rotina.acionar()

    def despertar(self):
        print("Som do alarme: Triiiiiiim, Triiiiiiim")
        self.acionar_todas_rotinas()

    def get_rotina(self):
        return self.__rotina
    
    rotina = property(get_rotina) # uma das formas de usar o getter no python, poderia passar o setter aqui dentro e o python saberia escolhar qual usar em determinado momento


# Interface Observer
class Acionador(ABC):
    @abstractmethod
    def acionar(self):
        pass


# Observador Rotina Luzes
class AcionadorLuzes(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Acendendo as Luzes")


# Observador Rotina Café
class AcionadorCafeteira(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Preparando o café")


# Observador Computador
class AcionadorComputador(Acionador):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_rotinas(self)

    def acionar(self):
        print("Ligar computador")

# Cliente
if __name__ == "__main__":
    alarme_manha = Alarme()
    AcionadorLuzes(alarme_manha)
    AcionadorCafeteira(alarme_manha)
    AcionadorComputador(alarme_manha)
    print(alarme_manha.rotina) # uso do getter no python
    alarme_manha.despertar()

    alarme_tarde = Alarme()
    AcionadorCafeteira(alarme_tarde)

    alarme_tarde.despertar()
