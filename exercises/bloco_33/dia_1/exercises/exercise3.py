# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def square_n(n):
    indice = 0
    while indice < n:
        print(n * "*")
        indice += 1

# Outra forma de fazer:
# def draw_square(n):
#     for row in range(n):
#         print(n * '*')


square_n(5)
