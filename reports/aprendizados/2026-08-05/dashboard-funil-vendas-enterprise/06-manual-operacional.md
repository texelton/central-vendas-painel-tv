# Manual de Boas Práticas Validadas

## Regras concretas pro redesign (derivadas da pesquisa, não de achismo)

1. **Corte antes de decorar.** Antes de qualquer escolha visual, perguntar: essa métrica muda o que alguém vai fazer hoje? Se não, ela não fica na tela principal. [C1]
2. **Funil de verdade tem 3 partes obrigatórias**: nome do estágio, número/valor naquele estágio, % de conversão pro próximo estágio. Sem as 3, não é funil, é lista de números. [C3][C5]
3. **Forma visual do funil**: barras horizontais empilhadas de cima pra baixo, a largura de cada barra proporcional à quantidade — não um "V" invertido decorativo, não um gráfico de pizza. [C8]
4. **Texto em TV**: título/label em minúsculas ou title case, não CAIXA ALTA — CAIXA ALTA reduz legibilidade a distância. Reservar caixa alta só pra 1-2 palavras de destaque máximo. [C10]
5. **Tamanho de fonte pra TV**: calcular pela distância real de visualização da sala (fórmula: altura do texto em polegadas ≈ distância em pés × 0,01 a 0,014) — não adivinhar visualmente numa tela de notebook. [C9]
6. **Restrição visual não é "sem graça"** — é o que profissionais como Stripe usam pra parecer confiável. Cor com função (vermelho=risco, verde=bom), não cor decorativa espalhada. [C2][C6]
7. **Uma camada, não vários painéis desconectados** — o funil deve ser o centro da tela, não mais um card entre outros oito. [C7]
8. **Antes de prometer um dado novo no dashboard, verificar se ele existe na fonte real** — não assumir. (Lição direta desse ciclo: o usuário achava que o dado existia; a checagem direta na API mostrou que não.) [C11]

## Antipadrões a evitar (confirmados nesse ciclo)

- Reskin visual repetido sem mudar a estrutura de informação por trás
- Texto em caixa alta generalizado "pra dar impacto"
- Prometer métrica sem confirmar que o dado de origem existe
