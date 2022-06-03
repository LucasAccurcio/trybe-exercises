from collections import Counter


class Estatistica:
    def media(self, list):
        soma = 0
        for element in list:
            soma += element
        return soma / len(list)

    def mediana(self, list):
        list.sort()
        indice_mediana = len(list) // 2
        if len(list) % 2 == 0:
            media = 0
            media = (list[indice_mediana - 1] + list[indice_mediana]) // 2
            return media
        return list[indice_mediana]

    def moda(cls, numbers):
        number, _ = Counter(numbers).most_common()[0]
        return number


estatistica = Estatistica()
print(estatistica.media([5, 6]))
print(
    estatistica.mediana(
        [
            2.9,
            3.0,
            3.5,
            4.9,
            5.5,
            6.0,
            6.0,
            6.5,
            6.7,
            6.8,
            7.1,
            7.6,
            8.2,
            8.2,
            9.1,
            9.9,
            9.9,
            10.0,
            10.0,
            10.0,
            100.0,
        ]
    )
)  # 7.1

print(estatistica.mediana([1, 2, 5, 7, 9, 11]))  # 6

print(estatistica.moda([8, 4, 6, 8]))
