// Conteúdo do site. Substitua placeholders (*) pelos dados reais da empresa.
export const site = {
  name: 'Jucimar JS',
  tagline: 'Climatização & Ar-Condicionado',
  phone: '(00) 00000-0000', // *
  phoneHref: 'tel:+5500000000000', // *
  whatsapp: '5500000000000', // * DDI+DDD+número
  email: 'contato@jucimarjs.com.br', // *
  address: 'Sua Cidade, UF', // *
  hours: 'Seg a Sáb · 8h às 18h', // *
  rating: { score: '5/5', reviews: '100+' }, // *
  social: { instagram: '#', facebook: '#', google: '#' }, // *
}

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`

export const nav = [
  { label: 'Serviços', href: '/servicos' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Dicas', href: '/dicas' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
]

export const services = [
  {
    slug: 'instalacao-de-split',
    title: 'Instalação de Split',
    description:
      'Instalação completa de ar-condicionado split com gabarito, suportes e testes de vazamento. Obra limpa e garantida.',
    longDescription:
      'Uma instalação mal feita derruba a eficiência do equipamento e causa vazamentos de gás e água. Aqui, cada instalação segue um roteiro técnico: escolha do ponto, fixação com gabarito, tubulação com vácuo e testes completos antes da entrega.',
    includes: [
      'Visita técnica e escolha do melhor ponto de instalação',
      'Fixação com gabarito e suportes de qualidade',
      'Tubulação, vácuo e teste de vazamento de gás',
      'Teste de dreno e acabamento limpo',
      'Orientação de uso e garantia de 1 ano na instalação',
    ],
    image:
      'https://images.unsplash.com/photo-1684674452842-5f5bb4004bd8?auto=format&fit=crop&w=800&q=70',
  },
  {
    slug: 'manutencao-preventiva',
    title: 'Manutenção Preventiva',
    description:
      'Limpeza de filtros, serpentinas e dreno, verificação de gás e elétrica. Seu equipamento dura mais e gasta menos.',
    longDescription:
      'Ar-condicionado sujo consome até 30% mais energia e quebra mais cedo. A manutenção preventiva periódica mantém o equipamento eficiente, silencioso e dentro da garantia do fabricante.',
    includes: [
      'Limpeza de filtros, serpentinas e bandeja',
      'Verificação e desobstrução do dreno',
      'Checagem de pressão de gás e conexões elétricas',
      'Teste de ruído, vibração e temperatura',
      'Relatório do estado do equipamento',
    ],
    image:
      'https://images.unsplash.com/photo-1593673840431-f73577938445?auto=format&fit=crop&w=800&q=70',
  },
  {
    slug: 'higienizacao-completa',
    title: 'Higienização Completa',
    description:
      'Higienização profunda que elimina mofo, bactérias e odores. Ar mais puro para a sua família ou equipe.',
    longDescription:
      'Cheiro de mofo ao ligar o ar é sinal de colônia de fungos e bactérias dentro do equipamento. A higienização completa desmonta, lava e sanitiza cada parte. Indispensável para quem tem crianças, idosos ou alérgicos em casa.',
    includes: [
      'Desmontagem e lavagem profunda da evaporadora',
      'Aplicação de bactericida e fungicida específicos',
      'Limpeza da turbina e da bandeja de condensação',
      'Higienização do filtro e da carenagem',
      'Teste final de qualidade do ar e odores',
    ],
    image:
      'https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'reparo-e-diagnostico',
    title: 'Reparo e Diagnóstico',
    description:
      'Diagnóstico honesto e reparo de placas, compressores, sensores e vazamentos. Preço fechado antes de começar.',
    longDescription:
      'Equipamento não gela, pinga, faz barulho ou desarma? Nós encontramos a causa real, sem trocar peça por tentativa. Você recebe o diagnóstico e o preço fechado antes de qualquer reparo começar.',
    includes: [
      'Diagnóstico completo com equipamentos de medição',
      'Reparo de placas eletrônicas e sensores',
      'Detecção e selagem de vazamentos de gás',
      'Troca de capacitores, motores e componentes',
      'Garantia escrita de 90 dias no reparo',
    ],
    image:
      'https://images.unsplash.com/photo-1693741535032-4c87dd35b191?auto=format&fit=crop&w=800&q=70',
  },
]

export const differentials = [
  'Preço fechado: você paga pelo serviço, não pela hora',
  'Técnicos uniformizados, identificados e treinados',
  'Garantia escrita de todos os serviços',
  'Atendimento rápido, inclusive emergências',
  'Peças e materiais de qualidade com nota fiscal',
]

export const tips = [
  {
    title: 'Ar-condicionado não gela? Passos antes de chamar o técnico',
    excerpt:
      'Filtro sujo, modo errado no controle e disjuntor desarmado respondem pela maioria dos chamados. Veja o que verificar primeiro.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=70',
  },
  {
    title: 'De quanto em quanto tempo devo limpar o ar-condicionado?',
    excerpt:
      'A resposta depende do uso e do ambiente, mas existe um intervalo mínimo que protege sua saúde e sua conta de luz.',
    image:
      'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?auto=format&fit=crop&w=800&q=70',
  },
  {
    title: 'Inverter ou convencional: qual vale mais a pena?',
    excerpt:
      'Entenda a diferença de consumo, preço e conforto entre as tecnologias antes de comprar seu próximo equipamento.',
    image:
      'https://images.unsplash.com/photo-1614633833026-0820552978b6?auto=format&fit=crop&w=800&q=70',
  },
  {
    title: '5 sinais de que seu ar-condicionado precisa de manutenção',
    excerpt:
      'Ruídos, gotejamento, cheiro estranho e conta de luz alta são avisos. Quanto antes o diagnóstico, mais barato o reparo.',
    image:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=70',
  },
]

export const faqs = [
  {
    q: 'Vocês cobram pela visita de diagnóstico?',
    a: 'Trabalhamos com orçamento transparente. Em caso de aprovação do serviço, a taxa de visita é revertida em desconto no valor total. Consulte as condições para a sua região.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Aceitamos Pix, dinheiro e cartões de crédito e débito das principais bandeiras. Para contratos comerciais, emitimos boleto e nota fiscal.',
  },
  {
    q: 'Vocês atendem emergências fora do horário comercial?',
    a: 'Sim. Para clientes com urgência, como comércios e ambientes com crianças ou idosos, oferecemos atendimento emergencial mediante disponibilidade de agenda.',
  },
  {
    q: 'Vocês instalam equipamento comprado pelo cliente?',
    a: 'Sim, instalamos equipamentos adquiridos em lojas, desde que novos e compatíveis com o local. Avaliamos a estrutura antes e informamos qualquer adequação necessária.',
  },
  {
    q: 'O serviço tem garantia?',
    a: 'Todos os serviços têm garantia escrita: 90 dias para reparos e até 1 ano para instalações, conforme o tipo de serviço executado.',
  },
  {
    q: 'Quanto tempo demora uma instalação de split?',
    a: 'Uma instalação padrão de split hi-wall leva de 2 a 4 horas, incluindo fixação, tubulação, vácuo e testes. Locais com infraestrutura pronta podem ser mais rápidos.',
  },
]

export const reviews = [
  {
    name: 'Maria S.',
    location: 'Centro',
    text: 'Atendimento pontual, técnicos educados e preço exatamente como combinado. O ar ficou gelando como novo.',
  },
  {
    name: 'Carlos P.',
    location: 'Jardim das Flores',
    text: 'Fizeram a instalação do split no meu escritório. Trabalho limpo, sem sujeira, e ainda explicaram como economizar energia.',
  },
  {
    name: 'Ana R.',
    location: 'Vila Nova',
    text: 'Chamei para uma higienização e o serviço foi impecável. Cheiro de mofo sumiu no mesmo dia. Recomendo!',
  },
]
