// =============================================================
//  PRODUCTOS
//
//  Para remeras (category: "remera-actual" o "remera-retro") podés
//  agregar un campo opcional "players" con jugadores disponibles.
//
//  Estructura de un jugador:
//  {
//    name:   "Nombre del jugador",
//    number: "10",           ← número en la camiseta
//    price:  "$35.000",      ← precio con el jugador estampado
//    sizes: [                ← talles disponibles para ESE jugador
//      { label: "S",  available: true  },
//      { label: "M",  available: false },
//    ]
//  }
//
//  Si un producto no tiene "players", solo muestra la sección de talles normal.
//  Los shorts nunca tienen jugadores.
// =============================================================


const PRODUCTS = [
  {
    id: 1,
    name: "CAMISETA ARGENTINA 25/26 TITULAR - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Talle XL disponible entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: false  },
      { label: "M",   available: true  },
      { label: "L",   available: true  },
      { label: "XL",  available: true },
      { label: "XXL", available: false },
    ],
    players: [
      {
        name: "Messi",
        number: "10",
        price: "$57.000",
        sizes: [
          { label: "S",  available: false  },
          { label: "M",  available: true  },
          { label: "L",  available: false  },
          { label: "XL", available: false },
        ]
      },
      {
        name: "J. Alvarez",
        number: "9",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true  },
          { label: "M",  available: true },
          { label: "L",  available: false  },
          { label: "XL", available: false  },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-09-at-13-49-05-51b6318496ba5200ab17652991202625-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-09-at-13-49-051-b02f28f7f2771f6d9417652991202104-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-09-at-13-49-053-4a423cdfa57e4c30da17652991202214-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-09-at-13-49-063-e9ae11322507fdb49617652991161850-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-16-at-19-32-201-5dde9fc1f0c4c60b8717698856725802-1024-1024.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-16-at-19-32-19-281803f3c8eea2c50417698856739293-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-12-at-14-25-483-f6cac792dfffb9bc8c17682388722054-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-12-at-14-25-481-ace96ef84002a4693917682388722843-640-0.webp",
    ]
  },
  {
    id: 2,
    name: "CAMISETA RIVER 25/26 TITULAR - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Talle L disponible entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: false  },
      { label: "M",   available: true  },
      { label: "L",   available: true  },
      { label: "XL",  available: false  },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-04-at-13-40-381-1e46d7743736e07de817702235185976-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-04-at-13-40-382-aeba401291d66390fb17702235188694-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-04-at-13-40-383-00ef9137634ce4cb0017702235185368-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-04-at-13-40-385-f5b29a5a52c3bd710317702235186883-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-04-at-13-40-384-6e147c83e348fddd7517702235184775-640-0.webp",
    ]
  },
  {
    id: 31,
    name: "CAMISETA BOCA 25/26 TITULAR - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true  },
      { label: "M",  available: true  },
      { label: "L",  available: false },
      { label: "XL", available: false  },
      { label: "XXL", available: true  },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-09-03-at-13-37-43-db2df33be36104feef17569175475506-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-09-03-at-13-37-43-1-537f53631385203ca717569175475853-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-09-03-at-13-37-43-2-8a78e2b66fa9cf406b17569175476340-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-09-03-at-15-38-52-0ce48ca59d415c909717569247515784-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-09-03-at-13-37-43-3-4aa4a275135eb3398f17569175475948-640-0.webp",
    ]
  },
  {
    id: 3,
    name: "CAMISETA RIVER 25/26 SUPLENTE - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true  },
      { label: "M",  available: true  },
      { label: "L",  available: true },
      { label: "XL", available: false  },
      { label: "XXL", available: true  },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-23-at-16-21-45-46a76c10404ee2fc4117718748270745-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-23-at-16-21-451-4ecfb1cb37e9014cbd17718748270895-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-23-at-16-21-452-c2d0231af6cb42059f17718748270492-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-03-at-19-07-201-fa0ed9e3ace2633dc517622077066752-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-23-at-16-21-453-0203a8263bf9e6addb17718748276307-640-0.webp",
    ]
  },
  {
    id: 4,
    name: "CAMISETA BOCA 25/26 SUPLENTE - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false },
      { label: "M",  available: false  },
      { label: "L",  available: false },
      { label: "XL", available: false  },
      { label: "XXL", available: true  },
      { label: "3XL", available: true  },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-25-at-19-11-171-8e259bbdb204c9b53417561599622816-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-25-at-19-11-17-999986a70fa59f898017561599617778-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-25-at-19-11-19-8df9c7f63cd0bc8cc717561599620672-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-25-at-19-11-191-2a3db9de88cb27292d17561599622197-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-25-at-19-11-192-8f78feb662dd197b2617561599618980-640-0.webp",
    ]
  },
  {
    id: 7,
    name: "CAMISETA ATLÉTICO DE MADRID 25/26 SUPLENTE CELESTE - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: false },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/gemini-1-903d3b369502ca4a9417750587825817-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/177358724075b446038b23dee57c76b0f8c8e5f838-0abfce366d4578d0e617750001241942-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/17735872402373e71b260784f1e53e0fc633b02ece-bbeba91a20dcec0b9b17750001240952-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/17735872409201862b6fa6753716077c226409dd4b-41e807fbc600f1e7b417750001241023-640-0.webp",
    ]
  },
  {
    id: 9,
    name: "CAMISETA LIVERPOOL 25/26 SUPLENTE BLANCA - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true  },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Mac Allister",
        number: "10",
        price: "$57.000",
        sizes: [
          { label: "S",  available: false },
          { label: "M",  available: false  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
      {
        name: "Salah",
        number: "11",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
      {
        name: "Szoboszlai ",
        number: "8",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/unnamed-2-1-dd41fba513b7480f6b17750601205688-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/sku-7206_1-1756497216646-35b9f666dd523b775117749996952087-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-223-18c49f67510a7f5c0817643707582467-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-224-eed787ca1bc404723717643707583411-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-12-01-at-20-09-562-5ec0f1e230bcdb017e17646307067195-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-25-at-21-46-56-11ed8cd5678c78578b17720668349732-1024-1024.webp",

    ]
  },
  {
    id: 10,
    name: "CAMISETA REAL MADRID 25/26 SUPLENTE AZUL - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-14-at-13-52-43-1cf47970ecc8e1d53e17749995324093-1024-1024.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-14-at-13-52-431-a51223add36c0edde217749995336021-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-14-at-13-52-444-54a1c50aa66262151d17749995345597-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-08-14-at-13-52-445-5f10f580ed5d56b98917749995355747-640-0.jpg",
    ]
  },
  {
    id: 72025,
    name: "CAMISETA NAPOLI 25/26 BLANCA - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
      { label: "XL", available: true },
      { label: "XXL", available: false },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-09437c55a5dd4976ef17748964463934-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-1-ba301e3f1434d78ef317748964469251-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-2-c369d078fc7e2246ff17748964469497-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-4-9554684588129a0be517748964468739-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-3-e0bfe54981daa5d80f17748964465519-640-0.webp",
    ]
  },
  {
    id: 1111,
    name: "CAMISETA BARCELONA 25/26 SUPLENTE BEIGE - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Raphinha",
        number: "11",
        price: "$57.000",
        sizes: [
          { label: "S",  available: false },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
          { label: "XXXL", available: true },
        ]
      },
      {
        name: "Yamal",
        number: "10",
        price: "$57.000",
        sizes: [
          { label: "S",  available: false },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
          { label: "XXXL", available: true },
        ]
      },
      {
        name: "Pedri",
        number: "8",
        price: "$57.000",
        sizes: [
          { label: "XL", available: true },
          { label: "XXL", available: false },
          { label: "XXXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-04-01-at-12-27-09-8de01add6770493d7a17750572442900-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-18-at-13-20-053-d6e83323335a406bbf17716822233393-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-18-at-13-20-052-38d3237ce4bff2c0de17716822222296-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/17736007575395a90dabee82a3cf1f83a873533282-7b4ce77e99463042a017747099636336-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-18-at-13-20-054-d202b7605cac6612c717634829491114-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-21-3cb2b318bb31f9894717643709028255-1024-1024.webp",
    ]
  },
  {
    id: 1112,
    name: "CAMISETA LIVERPOOL 25/26 TITULAR - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
    ],
    players: [
      {
        name: "Mac Allister",
        number: "10",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-10-at-16-02-12-429a6c43f30aa51c2917731694154889-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-10-at-16-02-13-464a4fe6b3f0c6cd2317731694156026-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-10-at-16-02-131-15b6e73a33624dda2a17731694155101-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-10-at-16-02-141-34a4a9efbcea50dd5e17731694158690-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-10-at-16-02-14-2e3b8a82e11abf76f217731694159988-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-13-at-16-02-134-658563ed9ae0b093d917630606022821-640-0.webp",
    ]
  },
  {
    id: 11,
    name: "CAMISETA TOTTENHAM 25/26 TITULAR - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: true },
      { label: "M",  available: true  },
      { label: "L",  available: true  },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Cuti Romero",
        number: "17",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/unnamed-3-1-2306ab21bd127bf4a117750628830024-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-211-c020d37f0ff5e7976317643709293149-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-213-84a735656a87c03e7c17643709297194-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-28-at-19-57-214-02874bfef6e94f1c8b17643709293822-1024-1024.webp",
    ]
  },
  {
    id: 12,
    name: "CAMISETA TOTTENHAM 25/26 SUPLENTE NEGRA - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false },
      { label: "M",  available: true  },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL",  available: true  },
    ],
    players: [
      {
        name: "Cuti Romero",
        number: "17",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: false },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-12-898c78e4c5d0c76bd917748964053482-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-13-6404a4c5551f7c111817748964052619-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-46-12-1-0a15d401ed22680b1617748964057546-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-13-at-15-38-115-90fa24d87d3d5e977117630604357318-1024-1024.webp",
    ]
  },
  {
    id: 13,
    name: "CAMISETA CHELSEA 25/26 SUPLENTE BLANCA - TELA JUGADOR",
    category: "remera-actual",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false },
      { label: "M",  available: false  },
      { label: "L", available: false },
      { label: "XL", available: false },
      { label: "XXL",  available: false  },
    ],
    players: [
      {
        name: "Enzo Fernandez",
        number: "8",
        price: "$57.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
          { label: "3XL", available: true },

        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-45-12-4-8c2cc1e60a91301b4617748963427357-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-45-12-253d941eb2bc6ab36d17748963423990-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-45-12-1-e8700290478650463f17748963427370-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-45-12-2-a068fc2132efa56be417748963422967-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-30-at-15-45-12-3-979b3ac5cf01c2298717748963423698-640-0.webp",
    ]
  },

  // ---------------------------------------------------------------------------------------------------------------------------------------------
  // RETROS
  // ---------------------------------------------------------------------------------------------------------------------------------------------

  {
    id: 8,
    name: "CAMISETA BOCA 2000 TITULAR - RETRO",
    category: "remera-retro",
    price: "$50.000",
    description: "Disponible talle L entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false  },
      { label: "M",  available: true },
      { label: "L",  available: true  },
      { label: "XL", available: true  },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2023-10-03-at-09-16-44-a057422decef24bccd16963371982656-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2023-10-03-at-09-16-43-3-37e40ab91f29b2e57516963371960845-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2023-10-03-at-09-16-43-2-da85d24bf406552a0c169633719402121-ac5dcf82fe064c5dec16963372944001-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2023-10-03-at-09-16-43-1-a587fdf27892d40a4d16963371920102-640-0.webp",
    ]
  },
  {
    id: 102015,
    name: "CAMISETA BARCELONA 2015 TITULAR - RETRO",
    category: "remera-retro",
    price: "$55.000",
    description: "Disponible talle M (Messi-10) entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",  available: false  },
      { label: "M",  available: false },
      { label: "L",  available: false  },
      { label: "XL", available: false  },
    ],
    players: [
      {
        name: "Messi",
        number: "10",
        price: "$55.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true },
          { label: "L",  available: true },
          { label: "XL", available: true },
        ]
      },
      {
        name: "Iniesta",
        number: "8",
        price: "$55.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true },
          { label: "L",  available: true },
          { label: "XL", available: true },
        ]
      },
      {
        name: "Suarez",
        number: "9",
        price: "$55.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true },
          { label: "L",  available: true },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-04-04-at-18-01-37-3-788bd9d11908f065df17438015448115-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/20230811_140301-cc867b68b670a5fe7f17671019818539-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/20230811_140254-58396e852a5c2c5f7f17671019817312-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-06-26-at-10-11-42-1-f22dee469537d66a7717509440345301-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-17-at-10-54-184-ab2a19f41b40e4829317737558438591-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2024-05-19-at-20-25-34-3-dc917be3cdda3881e017161612475768-1024-1024.webp",
    ],
  },

  // ---------------------------------------------------------------------------------------------------------------------------------------------
  // SHORTS
  // ---------------------------------------------------------------------------------------------------------------------------------------------

  {
    id: 4116,
    name: "SHORT ARGENTINA 25/26 BLANCO - TELA JUGADOR",
    category: "short",
    price: "$55.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-20-at-16-45-351-113b5f49932d66ccae17716167716650-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-20-at-16-45-34-aef0acc6f3b1133da317716167717299-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-20-at-16-45-352-1a3a4e43081d0b6a2a17716167716242-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-20-at-16-45-35-86fab2e954630f324e17716167716877-640-0.webp",
    ]
  },
  {
    id: 41,
    name: "SHORT BARCELONA 25/26 SUPLENTE BEIGE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Talle L y XXL disponible entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: false  },
      { label: "M",   available: false  },
      { label: "L",   available: false  },
      { label: "XL",  available: false  },
      { label: "XXL", available: false },
    ],
    players: [
      {
        name: "Raphinha ",
        number: "11",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-06-at-13-08-372-a3c20378c05ed556f817703941877567-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-06-at-13-08-37-e00723cbca0764f1f817703941880236-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-06-at-13-08-371-69ed82f4bac164d9aa17703941879866-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-06-at-13-08-373-f0e30779bd9cfbe7eb17703941871736-640-0.webp",
    ]
  },
  {
    id: 5,
    name: "SHORT BARCELONA 25/26 NEGRO - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Talle XXL disponible entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: false  },
      { label: "M",   available: true  },
      { label: "L",   available: true  },
      { label: "XL",  available: false  },
      { label: "XXL", available: false },
    ],
    players: [
      {
        name: "Yamal ",
        number: "10",
        price: "$50.000",
        sizes: [
          { label: "S",  available: false },
          { label: "M",  available: false  },
          { label: "L",  available: false  },
          { label: "XL", available: false },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-25-at-13-35-342-2606ec03cd649c324817640889114738-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-25-at-13-35-34-c2b8c95a994665644317640889114413-1024-1024.webp",
    ]
  },
  {
    id: 6,
    name: "SHORT CHELSEA 25/26 SUPLENTE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Talle XL disponible entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true  },
      { label: "M",   available: true  },
      { label: "L",   available: false  },
      { label: "XL",  available: true  },
      { label: "XXL", available: false },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-20-at-12-14-562-d9c9a0c11783546f2617639069312112-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-20-at-12-14-56-5c8a56e3ce2e48b50517639069285389-1024-1024.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-20-at-12-14-561-8bde1cedc371ec75f917639069300442-640-0.jpg",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-20-at-12-14-563-f839d41cd4f71304ac17639069323527-640-0.jpg",
    ]
  },
  {
    id: 92025,
    name: "SHORT MANCHESTER CITY 25/26 SUPLENTE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Talle M disponible (Haaland-9) entrega inmediata. Demás talles disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Halaand",
        number: "9",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
      {
        name: "Foden",
        number: "47",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-04-04-at-12-51-54-2-64fadfc6754579c36d17753244287246-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/diseno-sin-titulo-a1a4e48a5ab1f68c5d17753244285498-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-13-at-09-55-542-c9c6ddcac0c931b0ee17734065977696-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-13-at-09-55-544-605f79984fb5c487ce17734065972224-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-21-at-09-04-303-0c185ef86b0d0dd2ef17716754957191-640-0.webp",
    ]
  },
  {
    id: 4111,
    name: "SHORT ATLETICO MADRID 25/26 TITULAR - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Julian Alvarez",
        number: "9",
        price: "$50.000",
        sizes: [
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
      {
        name: "Griezmann",
        number: "7",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-03-04-c1d05410aa1cd117a117678882177110-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-03-03-4bfeddd1c62da6302d17678882177140-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-03-041-64795ba4dde190c79317678882181501-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-23-at-11-21-074-acf0475bbf0959421e17639076934172-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-03-28-at-17-05-24-1-ae640488769474994717747285038942-640-0.webp",
    ]
  },
  {
    id: 4112,
    name: "SHORT ATLETICO MADRID 25/26 SUPLENTE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Julian Alvarez",
        number: "9",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
          { label: "XXL", available: true },
        ]
      },
      {
        name: "Griezmann",
        number: "7",
        price: "$50.000",
        sizes: [
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-12-at-11-33-022-1db57fc206efa0853a17629581896752-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/diseno-sin-titulo-fca4970d68da9b33de17753156854618-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-04-04-at-12-11-02-1-b3351209726dfd58f117753156881908-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-12-at-11-33-02-76cf6235e0a65d248d17629581896751-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-21-at-08-38-11-2b4dbc8e3854e61f3017716755902194-1024-1024.webp",
    ]
  },
  {
    id: 4113,
    name: "SHORT INTER 25/26 SUPLENTE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-10-at-13-28-43-6ad0d48eeefc0c0a1a17680628766960-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-10-at-13-28-44-adceccc12c5651392317680628766618-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-10-at-13-28-441-f93df5eeed17cccac417680628768016-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-10-at-13-28-442-8dd06e768ed30fde2317680628767203-640-0.webp",
    ]
  },
  {
    id: 4114,
    name: "SHORT INTER 25/26 TITULAR - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    players: [
      {
        name: "Lautaro Martinez",
        number: "10",
        price: "$50.000",
        sizes: [
          { label: "S",  available: true },
          { label: "M",  available: true  },
          { label: "L",  available: true  },
          { label: "XL", available: true },
        ]
      },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-25-at-21-41-284-7a093072b5b27cc4b717720666275936-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-25-at-21-41-283-4285741075081d472a17720666272589-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-02-25-at-21-41-285-f4871197b47144194c17720666272050-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-18-at-12-04-41-1-8f35e66209210f979a17634784981481-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2025-11-18-at-12-04-40-c330b5ee5a513064cd17634784981707-1024-1024.webp",
    ]
  },
  {
    id: 4115,
    name: "SHORT CHELSEA 25/26 SUPLENTE - TELA JUGADOR",
    category: "short",
    price: "$50.000",
    description: "Disponible por encargo, llega en 10 días.",
    sizes: [
      { label: "S",   available: true },
      { label: "M",   available: true },
      { label: "L",   available: true },
      { label: "XL",  available: true },
      { label: "XXL", available: true },
    ],
    images: [
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-01-292-ae5645a337c0ace77617678881572959-640-0.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-01-291-1b3ab253310950bd6017678881573360-1024-1024.webp",
      "https://acdn-us.mitiendanube.com/stores/905/531/products/whatsapp-image-2026-01-08-at-13-01-293-edd346aab3dd7c0c4817678881573155-640-0.webp",
    ]
  },
];


// =============================================================
//  A PARTIR DE ACÁ ES LA LÓGICA — no necesitás tocar esto
// =============================================================

// ── Estado ──
let currentFilter   = 'all';
let activeProduct   = null;
let currentImgIdx   = 0;
let selectedPlayer  = null;

// ── Helper: etiqueta de categoría ──
function categoryLabel(cat) {
  if (cat === 'remera-actual') return 'Actual';
  if (cat === 'remera-retro')  return 'Retro';
  return 'Short';
}

// ── Renderizar catálogo ──
function renderCatalog() {
  const catalog  = document.getElementById('catalog');
  const countBar = document.getElementById('count-bar');
  const filtered = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === currentFilter);

  countBar.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    catalog.innerHTML = '<p class="empty-msg">No hay productos en esta categoría</p>';
    return;
  }

  catalog.innerHTML = filtered.map(p => {
    const availSizes = p.sizes.filter(s => s.available).map(s => s.label);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-img-wrap">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
          <span class="card-tag">${categoryLabel(p.category)}</span>
          ${p.players ? '<span class="card-badge-player">+ Jugador</span>' : ''}
        </div>
        <div class="card-info">
          <p class="card-name">${p.name}</p>
          <p class="card-price">${p.price}</p>
          <div class="card-sizes">
            ${availSizes.map(s => `<span class="size-pill">${s}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  catalog.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });
}

// ── Modal: abrir ──
function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  activeProduct  = product;
  currentImgIdx  = 0;
  selectedPlayer = null;

  document.getElementById('modal-cat').textContent   = `— ${categoryLabel(product.category)}`;
  document.getElementById('modal-name').textContent  = product.name;
  document.getElementById('modal-price').textContent = product.price;
  document.getElementById('modal-desc').textContent  = product.description;

  updateGallery();
  renderPlayerSection(product);
  renderSizes(product.sizes);

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ── Modal: cerrar ──
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  activeProduct  = null;
  selectedPlayer = null;
}

// ── Galería de fotos ──
function updateGallery() {
  if (!activeProduct) return;
  const img = document.getElementById('modal-main-img');
  img.src   = activeProduct.images[currentImgIdx];
  img.alt   = activeProduct.name;

  const dots = document.getElementById('gallery-dots');
  dots.innerHTML = activeProduct.images.map((_, i) =>
    `<button class="gallery-dot ${i === currentImgIdx ? 'active' : ''}" data-idx="${i}"></button>`
  ).join('');

  dots.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      currentImgIdx = Number(dot.dataset.idx);
      updateGallery();
    });
  });
}

// ── Sección de jugadores ──
function renderPlayerSection(product) {
  const container = document.getElementById('modal-player-section');

  if (!product.players || product.players.length === 0) {
    container.innerHTML = '';
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  container.innerHTML = `
    <div class="player-toggle-wrap">
      <button class="player-toggle-btn active" id="player-toggle-no">Sin jugador</button>
      <button class="player-toggle-btn" id="player-toggle-yes">Con jugador</button>
    </div>
    <div class="player-list" id="player-list">
      ${product.players.map((pl, i) => `
        <button class="player-card" data-idx="${i}">
          <span class="player-number">#${pl.number}</span>
          <span class="player-name">${pl.name}</span>
          <span class="player-price">${pl.price}</span>
        </button>
      `).join('')}
    </div>
  `;

  // ocultar lista al inicio
  document.getElementById('player-list').style.display = 'none';

  document.getElementById('player-toggle-no').addEventListener('click', () => {
    document.getElementById('player-toggle-no').classList.add('active');
    document.getElementById('player-toggle-yes').classList.remove('active');
    document.getElementById('player-list').style.display = 'none';
    selectedPlayer = null;
    document.getElementById('modal-price').textContent = activeProduct.price;
    renderSizes(activeProduct.sizes);
    container.querySelectorAll('.player-card').forEach(c => c.classList.remove('selected'));
  });

  document.getElementById('player-toggle-yes').addEventListener('click', () => {
    document.getElementById('player-toggle-yes').classList.add('active');
    document.getElementById('player-toggle-no').classList.remove('active');
    document.getElementById('player-list').style.display = 'flex';
    if (!selectedPlayer) selectPlayer(0);
  });

  container.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', () => selectPlayer(Number(card.dataset.idx)));
  });
}

function selectPlayer(idx) {
  const pl = activeProduct.players[idx];
  selectedPlayer = pl;

  document.querySelectorAll('.player-card').forEach((c, i) => {
    c.classList.toggle('selected', i === idx);
  });

  document.getElementById('modal-price').textContent = pl.price;
  renderSizes(pl.sizes);
}

// ── Talles ──
function renderSizes(sizes) {
  const container = document.getElementById('modal-sizes');
  container.innerHTML = sizes.map(s => `
    <button
      class="size-btn ${s.available ? '' : 'unavailable'}"
      data-size="${s.label}"
      ${!s.available ? 'disabled' : ''}
      title="${s.available ? s.label : s.label + ' — sin stock'}"
    >${s.label}</button>
  `).join('');

  container.querySelectorAll('.size-btn:not(.unavailable)').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
}

// ── Filtros ──
function setFilter(f) {
  currentFilter = f;
  renderCatalog();
}

function clearActiveFilters() {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.dropdown-item').forEach(b => b.classList.remove('active'));
}

document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    clearActiveFilters();
    btn.classList.add('active');
    closeDropdown();
    setFilter(btn.dataset.filter);
  });
});

// ── Dropdown remeras ──
const remDrop   = document.getElementById('remera-dropdown');
const remMenu   = document.getElementById('remera-menu');
const remToggle = document.getElementById('remera-toggle');

function closeDropdown() {
  remDrop.classList.remove('open');
  remMenu.classList.remove('open');
}

remToggle.addEventListener('click', e => {
  e.stopPropagation();
  const isOpen = remMenu.classList.contains('open');
  closeDropdown();
  if (!isOpen) {
    remDrop.classList.add('open');
    remMenu.classList.add('open');
  }
});

document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', () => {
    clearActiveFilters();
    remToggle.classList.add('active');
    item.classList.add('active');
    closeDropdown();
    setFilter(item.dataset.filter);
  });
});

document.addEventListener('click', closeDropdown);

// ── Eventos del modal ──
document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});

document.getElementById('prev-img').addEventListener('click', () => {
  if (!activeProduct) return;
  currentImgIdx = (currentImgIdx - 1 + activeProduct.images.length) % activeProduct.images.length;
  updateGallery();
});

document.getElementById('next-img').addEventListener('click', () => {
  if (!activeProduct) return;
  currentImgIdx = (currentImgIdx + 1) % activeProduct.images.length;
  updateGallery();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeDropdown(); }
  if (!activeProduct) return;
  if (e.key === 'ArrowLeft')  { currentImgIdx = (currentImgIdx - 1 + activeProduct.images.length) % activeProduct.images.length; updateGallery(); }
  if (e.key === 'ArrowRight') { currentImgIdx = (currentImgIdx + 1) % activeProduct.images.length; updateGallery(); }
});

// ── Iniciar ──
renderCatalog();