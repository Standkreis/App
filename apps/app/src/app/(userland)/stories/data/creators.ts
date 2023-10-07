export type Creator = {
  name: string
  avatar: string
}

export type CreatorKey = 'sven' | 'huhn'

export const CREATORS: Record<CreatorKey, Creator> = {
  sven: {
    name: 'Sven Reiser',
    avatar: '/images/creators/sven.png',
  },
  huhn: {
    name: 'Sebastian Heusser',
    avatar: '/images/creators/huhn.png',
  },
}

type GetCreatorReturn = {
  name: string
  avatar: string
}

export const getCreator = (creator: CreatorKey): GetCreatorReturn => {
  console.log(creator, CREATORS[creator])
  return CREATORS[creator]
}
