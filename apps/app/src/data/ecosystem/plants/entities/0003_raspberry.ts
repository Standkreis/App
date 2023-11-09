import { Plant } from '../types'

const CONTENT = `Die Kartoffel ist eine einjährige krautige Pflanze und wird 40 - 70 cm hoch. Neben dem oberirdischen Kraut entwickeln sich unterirdische Ausläufer. Diese verdicken sich zu Knollen. Bei kultivierten Kartoffeln können je Pflanze im Durchschnitt 12 - 15 Kartoffelknollen geerntet werden.`

const raspberry: Plant = {
  id: '003',
  name: {
    common: 'Himbeere',
    scientific: 'Rubus idaeus',
  },
  classification: {
    family: {
      common: 'Rosengewächse',
      scientific: 'Rosaceae',
    },
    order: 'Rosales',
    genus: 'Rubus',
  },
  media: {
    icon: 'path/to/raspberry_icon.png',
    hero: 'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg', // Dies ist ein Beispielbild von Pexels.
    images: ['https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg'],
  },
  shortDescription:
    'Die Himbeere ist eine beliebte rote oder manchmal schwarze Beere.',
  content:
    'Himbeeren sind mehrjährige Sträucher, die für ihre leckeren Früchte bekannt sind...',
  tags: ['Frucht', 'Beere', 'Sommer'],
  sections: [
    {
      name: '📍 Standort',
      content: CONTENT,
      infos: [
        {
          label: 'Licht',
          type: 'default',
          chip: true,
          value: '☀️☀️☀️',
          hint: 'Sonnig',
        },
        {
          label: 'Wasser',
          type: 'default',
          chip: true,
          value: '☀️☀️☀️',
          hint: 'Sonnig',
        },
      ],
    },
  ],
  location: {
    light: 'sun',
    water: 'fresh',
    ground: 'humos bis sandig',
    nutrients: 'mittel bis nährstoffreich',
    ph: {
      from: { value: 5.5, unit: '' },
      to: { value: 6.5, unit: '' },
    },
    climate: 'gemäßigt',
  },
  growth: {
    description:
      'Himbeeren wachsen als Sträucher und können sich über Wurzelausläufer ausbreiten.',
    kind: 'staude',
    height: {
      from: { value: 1.2, unit: 'm' },
      to: { value: 2.5, unit: 'm' },
    },
    width: {
      from: { value: 1, unit: 'm' },
      to: { value: 1.5, unit: 'm' },
    },
    compatible: {
      cutting: true,
      frost: 'frosthart',
    },
    lifespan: { value: 10, unit: 'Jahre' },
    rootSystem: 'flach bis mittel',
  },
  seeding: {
    months: ['march', 'april'],
    description: 'Himbeeren werden oft über Wurzelausläufer vermehrt.',
    hortus: 'flach, 1-2cm tief',
    spacing: '40-60cm',
  },
  blossom: {
    color: 'weiß bis rosa',
    months: ['may', 'june'],
    form: 'einfach',
  },
  harvest: {
    description:
      'Himbeeren werden geerntet, wenn sie leicht von den Dornen gelöst werden können.',
    months: ['july', 'august'],
  },
  fruit: {
    color: 'rot bis schwarz, je nach Sorte',
    aroma: 'süß, leicht säuerlich',
    height: { value: 1.5, unit: 'cm' },
    width: { value: 1, unit: 'cm' },
  },
  follage: {
    color: 'grün',
    phase: 'sommergrün',
    form: 'gesägt',
  },
  synergies: {
    good: [
      'Knoblauch',
      'Zwiebeln',
      'Ringelblumen',
      'Borretsch',
      'Salbei',
      'Basilikum',
      'Petersilie',
      'Bohnen',
      'Spinat',
      'Erbsen',
    ],
    bad: [
      'Kartoffeln',
      'Johannisbeeren',
      'Auberginen',
      'Paprika',
      'Tomaten',
      'Erdbeeren',
      'Blaubeeren',
      'Schwarze Johannisbeeren',
      'Kürbisse',
    ],
  },
  ecology: {
    bees: {
      score: 5,
      description:
        'Bienen sind Hauptbestäuber von Himbeeren und besuchen die Blüten sehr häufig.',
    },
    caterpillar: {
      score: 2,
      description:
        'Einige Raupenarten können sich von Himbeerblättern ernähren.',
    },
  },
}
