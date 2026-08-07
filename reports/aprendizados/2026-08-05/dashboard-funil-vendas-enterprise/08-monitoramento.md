# Plano de Monitoramento

**Fontes Ouro/Prata monitoradas:** Baymard Institute (checkout-usability), site oficial de Edward Tufte — ambas estáveis há mais de uma década, baixa cadência de mudança esperada.

**Gatilho de reabertura de caso:** se a ferramenta de checkout do Matheus passar a enviar eventos de carrinho abandonado/pix gerado/cartão recusado pra planilha (ou outra fonte), reabrir esse estudo pra desenhar o funil com dado real.

**Cadência de verificação:** não é um dado que muda por release — verificar sob demanda, quando o usuário confirmar que a integração de checkout foi ajustada.

**Formato de alerta:** ao detectar (numa próxima sessão) que a planilha passou a ter novos valores de STATUS além de paid/Efetivado/authorized/APPROVED, sinalizar imediatamente ao usuário que o funil real pode ser construído.
