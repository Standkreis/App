import { Plant } from '../types'

const CONTENT = `Die Kartoffel ist eine einjährige krautige Pflanze und wird 40 - 70 cm hoch. Neben dem oberirdischen Kraut entwickeln sich unterirdische Ausläufer. Diese verdicken sich zu Knollen. Bei kultivierten Kartoffeln können je Pflanze im Durchschnitt 12 - 15 Kartoffelknollen geerntet werden.`

const potato: Plant = {
  id: '1',
  name: {
    common: 'Kartoffel',
    scientific: 'Solanum tuberosum',
  },
  classification: {
    family: {
      common: 'Nachtschattengewächse',
      scientific: 'Solanaceae',
    },
    order: 'Solanales',
    genus: 'Solanum',
  },
  media: {
    icon: 'path/to/potato_icon.png',
    hero: 'https://cdn.pflanzen-koelle.de/media/e7/df/33/1664529961/kartoffeln-a-z.jpg',
    images: [
      'https://www.gartentipps.com/wp-content/uploads/2020/01/kartoffeln-pflanzen.jpg',
      'https://image.brigitte.de/11561802/t/Ae/v2/w1440/r1/-/kartoffeln-pflanzen-bild.jpg',
    ],
  },
  shortDescription:
    'Die Kartoffel ist ein weltweit angebautes Grundnahrungsmittel.',
  content: CONTENT,
  tags: ['Gemüse', 'Knolle', 'Grundnahrungsmittel'],
  sections: [
    {
      name: '📍 Standort',
      content: CONTENT,
      infos: [
        {
          key: 'Licht',
          type: 'default',
          chip: true,
          value: '☀️☀️☀️',
          hint: 'Sonnig',
        },
        {
          key: 'Wasser',
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
    ground: 'lehmig bis sandig',
    nutrients: 'nährstoffreich',
    ph: {
      from: { value: 5.2, unit: '' },
      to: { value: 6.4, unit: '' },
    },
    climate: 'gemäßigt',
  },
  growth: {
    description:
      'Die Kartoffel wächst am besten in tiefgründigen, gut durchlüfteten Böden.',
    kind: 'staude',
    height: {
      from: { value: 30, unit: 'cm' },
      to: { value: 80, unit: 'cm' },
    },
    width: { value: 30, unit: 'cm' },
    compatible: {
      cutting: false,
      frost: 'frostempfindlich',
    },
    lifespan: { value: 1, unit: 'Jahr' },
    rootSystem: 'Knollenbildung',
  },
  seeding: {
    months: ['march', 'april', 'may'],
    description:
      'Kartoffeln werden durch das Pflanzen von Saatkartoffeln vermehrt.',
    hortus: '10-15cm tief',
    spacing: '30-40cm',
  },
  blossom: {
    color: 'weiß bis violett',
    months: ['june', 'july'],
    form: 'einfach',
  },
  harvest: {
    description:
      'Die Kartoffelernte erfolgt, wenn das Laub vergilbt und welkt.',
    months: ['august', 'september', 'october'],
  },
  fruit: {
    color: 'grün',
    aroma: 'giftig, nicht essbar',
    height: { value: 1.5, unit: 'cm' },
    width: { value: 1.5, unit: 'cm' },
  },
  follage: {
    color: 'grün',
    phase: 'sommergrün',
    form: 'einfach',
  },
  synergies: {
    good: [
      'Bohnen',
      'Kohl',
      'Mais',
      'Erdnuss',
      'Erbsen',
      'Radieschen',
      'Ringelblumen',
      'Sonnenblumen',
      'Kürbis',
      'Tabak',
    ],
    bad: [
      'Gurke',
      'Kürbis',
      'Sellerie',
      'Tomate',
      'Rhabarber',
      'Sonnenblumen',
      'Rosen',
      'Äpfel',
      'Kirschbäume',
    ],
  },
  ecology: {
    bees: {
      score: 2,
      description:
        'Bienen besuchen die Blüten gelegentlich, aber Kartoffelblüten sind nicht ihre Hauptquelle.',
    },
    caterpillar: {
      score: 1,
      description: 'Nicht besonders attraktiv für Raupen.',
    },
  },
}

export default potato
