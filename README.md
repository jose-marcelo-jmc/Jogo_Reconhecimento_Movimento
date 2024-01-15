# Jogo_Reconhecimento_Movimento
 Um jogo que usa o movimento de sua mão direita para ser controlado.
## funcionamento
* Com o jogo no arquivo index.HTML sendo inicializado em seu navegador e, logo em seguida, iniciando o código reconhecimento.py que se conectará à sua câmera, o jogo estará pronto para o uso do usuário. 
* Seu objetivo é guiar o cursor em direção ao alvo em destaque com o movimento da sua mão direita; a cada vez que entrar em contato com o alvo, os pontos serão contabilizados.
* Para que seja interrompido o reconhecimento de movimento e a conexão com a câmera, basta apertar a tecla "**Q**" do teclado.
## Descrição dos arquivos de código e suas funções
 #### HTML e CSS
  Responsável pela construção de cenário e design do jogo.
 #### JavaScript
  Responsável pela interação com o alvo e pelo funcionamento do contador de pontos contido no placar.
 #### Python
  Responsável pelo reconhecimento de imagem e movimento, acesso à câmera e movimentação do cursor via detecção de movimento.
## Bibliotecas Necessárias:
* OpenCV (cv2)
* mediapipe
* pyautogui
 ### ATENÇÃO
  * Certifique que esteja conectado á câmera.
  * Adapte o código conforme a versão do Python que atenda aos requisitos das bibliotecas e esteja atualizada.
    * Versão Recomendada do Python para o funcionamento geral do código: **3.8.10**
  
