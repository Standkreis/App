export type Name = {
  common: string
  scientific: string
}

type UnitNumber = {
  value: number
  unit: string
}

type UnitRange =
  | UnitNumber
  | {
      from: UnitNumber
      to: UnitNumber
    }

type Months =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december'

type MonthRange = Months[]

type Score = {
  score: number
  description: string
}

type BaseInfo = {
  label: string
  unit?: string
  hint?: string
}

export type InfoType = 'default' | 'range' | 'color' | 'colorRange' | 'calendar'

export interface Info extends BaseInfo {
  type: 'default'
  chip?: boolean
  value: string | number
}

export interface RangeInfo extends BaseInfo {
  type: 'range'
  chip?: boolean
  range: {
    from: string | number
    to: string | number
  }
}

interface ColorInfo extends BaseInfo {
  type: 'color'
  value: string
}

interface ColorRangeInfo extends BaseInfo {
  type: 'colorRange'
  range: {
    from: string
    to: string
  }
}

export interface CalendarInfo extends BaseInfo {
  type: 'calendar'
  months: Months[]
}

export type Infos = Info | RangeInfo | ColorInfo | ColorRangeInfo | CalendarInfo

export type Plant = {
  id: string
  name: Name
  classification: {
    family: Name
    order: string // Ordnung
    genus: string // Gattung
  }
  media: {
    icon: string
    hero: string
    images: string[]
  }
  shortDescription: string
  content: string // MDX
  tags: string[]
  sections: {
    name: string
    content: string // MDX
    infos: Infos[]
  }[]
  location: {
    light: 'sun' | 'partial' | 'shade'
    water: 'dry' | 'fresh' | 'wet'
    ground: string
    nutrients: string
    ph: UnitRange
    climate: string
  }
  growth: {
    description: string
    kind: 'staude'
    height: UnitRange
    width: UnitRange
    compatible: {
      cutting: boolean
      frost: string
    }
    lifespan: UnitRange
    rootSystem: string
  }
  seeding: {
    months: MonthRange
    description: string
    hortus: string
    spacing: string
  }
  blossom: {
    color: string
    months: MonthRange
    form: string
  }
  harvest: {
    description: string
    months: MonthRange
  }
  fruit: {
    color: string
    aroma: string
    height: UnitRange
    width: UnitRange
  }
  follage: {
    color: string
    phase: string
    form: string
  }
  synergies: {
    good: string[]
    bad: string[]
  }
  ecology: {
    bees: Score
    caterpillar: Score
  }
}
