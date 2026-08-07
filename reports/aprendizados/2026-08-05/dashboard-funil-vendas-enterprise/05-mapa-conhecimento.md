# Mapa de Conhecimento Vivo

## O que É um dashboard de vendas profissional (enterprise)

```
Dashboard profissional
├── Mostra só métricas que mudam decisão/comportamento (Stripe) [C1]
├── Restrição visual = confiança (whitespace, tipografia, sem decoração) (Stripe) [C2]
├── Funil = estágios sequenciais + % conversão + drop-off (HubSpot/Salesforce) [C3]
│   └── Estágios de e-commerce padrão: Carrinho → Checkout → Pagamento → Pedido completo (Baymard) [C4]
│       └── Pergunta central: ONDE as pessoas caem, não só quantas convertem (Baymard) [C5]
├── Princípio de autoridade: data/ink ratio — dado > decoração (Tufte) [C6]
├── Camada única de inteligência operacional (não silos fragmentados) (Command Center research) [C7]
└── Forma visual do funil: barras horizontais empilhadas, largura = quantidade (Mixpanel/Amplitude) [C8]
```

## O que NÃO é (onde as 2 tentativas anteriores erraram)

```
Erro de Contexto identificado
├── Buscou "tendência visual bonita" em vez de "como funil profissional é estruturado"
├── Neubrutalismo/glassmorphism = decoração, não clareza — contraria Tufte [C6]
├── Texto em CAIXA ALTA em excesso — pesquisa de sinalização diz que é MENOS legível a distância que minúsculas [C10]
└── "Funil" nunca foi de fato construído como estágios+conversão — ficou sempre em cards/KPIs soltos
```

## Onde isso se aplica no dashboard do Time Comercial

```
Dado que EXISTE hoje na planilha (verificado, C11)
├── Vendas pagas (todas as variações de status = sucesso)
├── Vendedor, produto, valor, cliente, data, order id
└── Pode virar: ranking (já existe), funil de PRODUTO (quantas tentativas por produto → quantas pagas, SE
     existir algum jeito de contar tentativas — hoje só existe o resultado final "pago")

Dado que NÃO existe (verificado, C11)
├── Carrinho abandonado
├── Pix gerado (não pago)
└── Cartão recusado
    └── Bloqueio: precisa a ferramenta de checkout passar a enviar esses eventos pra alguma planilha/webhook
```
