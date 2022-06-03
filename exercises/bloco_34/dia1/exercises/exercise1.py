class Tv:
    def __init__(self, tamanho, volume=50, canal=1, ligada=False):
        self.volume = volume
        self.canal = canal
        self.tamanho = tamanho
        self.ligada = ligada

    def aumentar_volume(self):
        if (self.volume < 99):
            self.volume += 1

    def diminui_volume(self):
        if (self.volume > 0):
            self.volume -= 1
        
    def modificar_canal(self, novo_canal):
        if (0 < novo_canal < 100):
            self.canal = novo_canal
    
    def ligar_desligar(self):
        self.ligada = not self.ligada

    def __str__(self) -> str:
        return f"""
        A Tv está {self.ligada}
        Canal {self.canal}
        Volume {self.volume}
        """

televisor = Tv(40)
print(televisor.canal)
televisor.ligar_desligar()
print(televisor)
televisor.aumentar_volume()
televisor.modificar_canal(55)
print(televisor)
televisor.ligar_desligar()
print(televisor)