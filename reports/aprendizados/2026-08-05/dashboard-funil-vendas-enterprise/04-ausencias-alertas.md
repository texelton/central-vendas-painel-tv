# Ausências e Alertas

## Busca por ausência de evidência aplicada ao dado do usuário

**Afirmação crítica testada:** "a planilha recebe esses dados [carrinho abandonado, pix gerado, cartão recusado], eles ficam ali sem serem utilizados"

**Pergunta obrigatória:** se isso fosse verdade, onde deveria estar documentado/visível?
→ Deveria aparecer como valores na coluna STATUS da aba "DADOS BRUTOS" (é o único lugar na planilha onde o resultado de uma tentativa de compra é registrado).

**Verificação:** consulta direta via API do Google Sheets, coluna H completa (linhas 2 a 5000, retornou 4999 linhas reais).

**Resultado:** só 5 valores distintos existem — `paid` (4791), `Efetivado` (150), `authorized` (52), vazio (5), `APPROVED` (1). Todos representam sucesso. Nenhum "abandonado", "recusado" ou "pix gerado (não pago)" foi encontrado. Confirmado também que só existem 2 abas na planilha inteira (DADOS BRUTOS, DASHBOARD) — não há aba oculta com esse dado.

**Classificação:** a crença do usuário era uma **Verdade Popular sem Validação Primária** — plausível (faz sentido que um checkout processe esses eventos), mas não verificada antes de ser tratada como fato. Depois da verificação, vira o contrário: **Verdade Absoluta de ausência** — o dado definitivamente não está nessa planilha hoje.

## Silêncio significativo

O fato de só existirem status de sucesso sugere que a ferramenta de checkout (pelos nomes de produto — "O GESTOR", "GESTOR DE REPUTAÇÃO BANCÁRIA" — e a presença de Pix, provavelmente uma plataforma brasileira de checkout/pagamento) só dispara o webhook/integração que escreve na planilha **quando a venda é confirmada**. Eventos de abandono/recusa tipicamente existem nos logs internos da própria plataforma de checkout, mas não foram configurados pra alimentar essa planilha. Isso é uma lacuna de integração, não uma lacuna de dashboard.

## Alerta de desatualização temporal

Nenhum indício de que isso mudou recentemente — a amostra cobre desde 26/02/2026 até o momento da consulta (04-05/08/2026), mais de 5 meses de histórico, com o mesmo padrão de status o tempo todo.
