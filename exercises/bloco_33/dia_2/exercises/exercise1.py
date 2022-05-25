string = "PEDRO"

indice = 0

while indice < len(string):
    for word in range(len(string) - indice):
      print(string[word], end="")
    indice += 1
    print()