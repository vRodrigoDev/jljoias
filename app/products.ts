export interface Product {
  id: string;
  code: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  badge?: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "53257700",
    code: "53257700",
    name: "Gargantilha gratidão com borboleta banhada a ouro 18k",
    price: 454.00,
    image: "/produtos/53257700.jpg",
    category: "Gargantilhas",
    description: "Gargantilha gratidão com borboleta delicada, banhada a ouro 18k Rommanel.",
    badge: "Destaque",
    inStock: true
  },
  {
    id: "53200506",
    code: "53200506",
    name: "Gargantilha com pingente solitário banhada a ouro 18k",
    price: 245.00,
    image: "/produtos/53200506.jpg",
    category: "Gargantilhas",
    description: "Gargantilha clássica com ponto de luz / pingente solitário, banhada a ouro 18k.",
    badge: "Mais Vendido",
    inStock: true
  },
  {
    id: "53183706",
    code: "53183706",
    name: "Gargantilha formada por fio de nylon com zircônia",
    price: 155.00,
    image: "/produtos/53183706.jpg",
    category: "Gargantilhas",
    description: "Gargantilha invisível em fio de nylon com ponto de luz de zircônia Rommanel.",
    inStock: true
  },
  {
    id: "53154906",
    code: "53154906",
    name: "Gargantilha banhada a ouro 18k com pingente coração",
    price: 399.00,
    image: "/produtos/53154906.jpg",
    category: "Gargantilhas",
    description: "Gargantilha feminina com pingente de coração cravejado em zircônias, banhada a ouro 18k.",
    badge: "Romântico",
    inStock: true
  },
  {
    id: "53122200",
    code: "53122200",
    name: "Escapulário coração de jesus e nossa senhora do carmo banhado a ouro 18k",
    price: 630.00,
    image: "/produtos/53122200.jpg",
    category: "Escapulários",
    description: "Escapulário tradicional Sagrado Coração de Jesus e Nossa Senhora do Carmo, banhado a ouro 18k.",
    badge: "Clássico",
    inStock: true
  },
  {
    id: "53250206",
    code: "53250206",
    name: "Gargantilha borboleta banhada a ouro 18k com zircônias",
    price: 558.00,
    image: "/produtos/53250206.jpg",
    category: "Gargantilhas",
    description: "Gargantilha borboleta vazada cravejada com zircônias brilhantes, acabamento banhado a ouro 18k.",
    badge: "Novidade",
    inStock: true
  }
];