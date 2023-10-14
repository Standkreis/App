import { Plant } from '../types'

const strawberry: Plant = {
  id: '2',
  name: {
    common: 'Erdbeere',
    scientific: 'Fragaria × ananassa',
  },
  classification: {
    family: {
      common: 'Rosengewächse',
      scientific: 'Rosaceae',
    },
    order: 'Rosales',
    genus: 'Fragaria',
  },
  media: {
    icon: 'path/to/strawberry_icon.png',
    hero: 'path/to/strawberry_hero.jpg',
    images: ['path/to/strawberry_image1.jpg', 'path/to/strawberry_image2.jpg'],
  },
  shortDescription:
    'Die Erdbeere ist eine beliebte süße Frucht und in vielen Gärten zu finden.',
  content:
    'Die Erdbeere ist eine ausdauernde Pflanze, die für ihre süßen, roten Früchte bekannt ist...',
  tags: ['Frucht', 'Beere', 'Sommer'],
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
      'Erdbeerpflanzen sind niedrig wachsend und breiten sich über Ausläufer aus.',
    kind: 'staude',
    height: { value: 15, unit: 'cm' },
    width: {
      from: { value: 30, unit: 'cm' },
      to: { value: 40, unit: 'cm' },
    },
    compatible: {
      cutting: false,
      frost: 'frostempfindlich',
    },
    lifespan: { value: 3, unit: 'Jahre' },
    rootSystem: 'flach',
  },
  seeding: {
    months: ['march', 'april'],
    description: 'Erdbeeren werden oft über Ausläufer vermehrt.',
    hortus: 'flach, 1-2cm tief',
    spacing: '25-30cm',
  },
  blossom: {
    color: 'weiß',
    months: ['may', 'june'],
    form: 'einfach',
  },
  harvest: {
    description: 'Erdbeeren werden geerntet, wenn sie vollständig rot sind.',
    months: ['june', 'july'],
  },
  fruit: {
    color: 'rot',
    aroma: 'süß, aromatisch',
    height: { value: 3, unit: 'cm' },
    width: { value: 2.5, unit: 'cm' },
  },
  follage: {
    color: 'grün',
    phase: 'sommergrün',
    form: 'dreiteilig',
  },
  synergies: {
    good: [
      'Bohnen',
      'Spinat',
      'Lettuce',
      'Zwiebel',
      'Lauch',
      'Borretsch',
      'Ringelblumen',
      'Knoblauch',
      'Radieschen',
      'Thymian',
    ],
    bad: [
      'Kohl',
      'Brokkoli',
      'Rosenkohl',
      'Grünkohl',
      'Kohlrabi',
      'Blumenkohl',
      'Weißkohl',
      'Rotkohl',
      'Wirsingkohl',
    ],
  },
  ecology: {
    bees: {
      score: 4,
      description: 'Bienen lieben Erdbeerblüten und besuchen sie häufig.',
    },
    caterpillar: {
      score: 2,
      description:
        'Manche Raupenarten können sich von Erdbeerpflanzen ernähren, aber sie sind nicht die Hauptnahrung.',
    },
  },
}
