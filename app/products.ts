export interface Product {
  id: string;
  code: string;
  name: string;
  price: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  // --- GARGANTILHAS E ESCAPULÁRIOS ---
  {
    id: "53257700",
    code: "53257700",
    name: "Gargantilha gratidão com borboleta banhada a ouro 18k",
    price: 454.0,
    image: "/produtos/53257700.jpg",
    category: "Gargantilhas",
    badge: "Destaque",
    description:
      "Gargantilha gratidão com borboleta delicada, banhada a ouro 18k Rommanel. Uma joia clássica, sofisticada e cheia de significado.",
  },
  {
    id: "53200506",
    code: "53200506",
    name: "Gargantilha com pingente solitário banhada a ouro 18k",
    price: 245.0,
    image: "/produtos/53200506.jpg",
    category: "Gargantilhas",
    description:
      "Gargantilha fina e elegante com pingente solitário em zircônia, banhada a ouro 18k Rommanel. Ideal para compor qualquer look com brilho sutil.",
  },
  {
    id: "53183706",
    code: "53183706",
    name: "Gargantilha fio de nylon com zircônia banhada a ouro 18k",
    price: 155.0,
    image: "/produtos/53183706.jpg",
    category: "Gargantilhas",
    description:
      "Gargantilha em ponto de luz com fio de nylon discreto e ponto de zircônia cintilante com acabamento folheado a ouro 18k Rommanel.",
  },
  {
    id: "53154906",
    code: "53154906",
    name: "Gargantilha banhada a ouro 18k com coração",
    price: 399.0,
    image: "/produtos/53154906.jpg",
    category: "Gargantilhas",
    description:
      "Gargantilha romântica com detalhe de coração folheada a ouro 18k Rommanel. O toque delicado e elegante indispensável no visual.",
  },
  {
    id: "53122200",
    code: "53122200",
    name: "Escapulário coração de jesus e nossa senhora do carmo banhado a ouro 18k",
    price: 630.0,
    image: "/produtos/53122200.jpg",
    category: "Gargantilhas",
    badge: "Coleção Fé",
    description:
      "Escapulário tradicional com as medalhas sagradas do Sagrado Coração de Jesus e Nossa Senhora do Carmo, banhado a ouro 18k Rommanel.",
  },
  {
    id: "53250206",
    code: "53250206",
    name: "Gargantilha borboleta com zircônias banhada a ouro 18k",
    price: 558.0,
    image: "/produtos/53250206.jpg",
    category: "Gargantilhas",
    description:
      "Gargantilha detalhada em formato de borboleta cravada com microzircônias, banhada a ouro 18k Rommanel com brilho único.",
  },

  // --- PULSEIRAS ADULTO ---
  {
    id: "55220800",
    code: "55220800",
    name: "Pulseira flores banhada a ouro 18k",
    price: 356.0,
    image: "/produtos/55220800.jpg",
    category: "Pulseiras",
    description:
      "Pulseira delicada com elos trabalhados em formato de flores texturizadas, banhada a ouro 18k Rommanel. Elegância atemporal para o dia a dia.",
  },
  {
    id: "55210000",
    code: "55210000",
    name: "Pulseira banhada a ouro 18k",
    price: 579.0,
    image: "/produtos/55210000.jpg",
    category: "Pulseiras",
    badge: "Clássico",
    description:
      "Pulseira modelo elo fígaro com acabamento espelhado de alto brilho, banhada a ouro 18k Rommanel com fecho resistente e elegante.",
  },
  {
    id: "55170900",
    code: "55170900",
    name: "Pulseira com coração banhada a ouro 18k",
    price: 258.0,
    image: "/produtos/55170900.jpg",
    category: "Pulseiras",
    description:
      "Pulseira de elo fino com pingente central de coração vazado, banhada a ouro 18k Rommanel. O toque romântico perfeito para compor mix de pulseiras.",
  },
  {
    id: "55067614",
    code: "55067614",
    name: "Pulseira banhada a ouro 18k com flores coloridas",
    price: 352.0,
    image: "/produtos/55067614.jpg",
    category: "Pulseiras",
    badge: "Coleção Cores",
    description:
      "Pulseira feminina folheada a ouro 18k intercalada com flores em pedras coloridas lapidadas Rommanel. Leveza, frescor e sofisticação.",
  },
  {
    id: "55209206",
    code: "55209206",
    name: "Pulseira solitária banhada a ouro 18k com zircônia",
    price: 350.0,
    image: "/produtos/55209206.jpg",
    category: "Pulseiras",
    description:
      "Pulseira delicada com ponto solitário de zircônia redonda facetada, banhada a ouro 18k Rommanel. Perfeita para quem ama detalhes minimalistas e luxuosos.",
  },
];