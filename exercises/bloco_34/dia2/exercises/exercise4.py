# Exercício 4: Agora que você tem duas formas diferentes de dar cartas para o seu baralho,
# refatore o código para não precisar mais de dois baralhos e dois iteradores isolados,
# mas sim usar um único iterador com duas estratégias diferentes de iteração.
# Dica: Você pode receber a estratégia na inicialização do baralho e passá-la para frente no __iter__.
# Solução:

from abc import ABC, abstractmethod
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas, estrategia):
        self._cartas = cartas
        self._estrategia = estrategia
        if estrategia is EstrategiaRegular:
            self._pos = 0 # Inicia na primira posição
        else:
            self._pos = -1 # Inicia pela última posição

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos = self._estrategia.proxima_carta(self._pos)
            return carta


class EstrategiaIteracao(ABC):
    @abstractmethod
    def proxima_carta(cls, index):
        raise NotImplementedError


class EstrategiaRegular(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index + 1


class EstrategiaReversa(EstrategiaIteracao):
    @classmethod
    def proxima_carta(cls, index):
        return index - 1


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, estrategia):
        self._cartas = [
            Carta(valor, naipe) for naipe in self.naipes for valor in self.valores
        ]
        self.estrategia = estrategia

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas, self.estrategia)


baralho = Baralho(
    EstrategiaReversa
)  # recebe 1 argumento "estrategia", sendo EstrategiaRegular ou EstrategiaReversa
iterador = iter(baralho)
print(next(iterador))
print(next(iterador))
print(next(iterador))
print(next(iterador))
print(next(iterador))
print(next(iterador))
