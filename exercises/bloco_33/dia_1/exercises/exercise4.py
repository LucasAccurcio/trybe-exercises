# Crie uma função que receba uma lista de nomes e retorne o nome
#  com a maior quantidade de caracteres. Por exemplo,
#  para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
#  o retorno deve ser "Fernanda".


def biggest_name(list):
    the_biggest = list[0]
    for name in list:
        if len(name) > len(the_biggest):
            the_biggest = name
    return the_biggest


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
