import json

def ler_arquivo():
  with open("books.json") as file:
    return json.load(file)

def contar_categorias(dados_json):
  categories = {}
  for livro in dados_json:
    for categoria in livro["categories"]:
            if not categories.get(categoria):
                categories[categoria] = 0
            categories[categoria] += 1
  return categories

def calcular_porcentagem_por_categoria(book_count_by_category, total_books):
  return [
      [category, num_books / total_books]
      for category, num_books in book_count_by_category.items()
  ]

if __name__ == "__main__":
  get_dados = ler_arquivo()
  contador_categorias = contar_categorias(get_dados)

  contador_livros = len(get_dados)

  porcentagem_por_categoria = calcular_porcentagem_por_categoria(
      contador_categorias, contador_livros
  )
  
  print(porcentagem_por_categoria)
