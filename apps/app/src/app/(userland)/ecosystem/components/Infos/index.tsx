import React from 'react'

import {
  CalendarInfo,
  Info,
  InfoType,
  RangeInfo,
} from '@/data/ecosystem/plants/types'
import { Infos } from '@/data/ecosystem/plants/types'
import Default from './Default'
import Range from './Range'
import Calendar from './Calendar'

type Props = {
  infos: Infos[]
}

const Infos = (props: Props) => {
  const { infos } = props

  const renderComponent = (info: Infos) => {
    const componentMap: Record<InfoType, React.ReactNode> = {
      default: <Default {...(info as Info)} />,
      range: <Range {...(info as RangeInfo)} />,
      color: <></>,
      colorRange: <></>,
      calendar: <Calendar {...(info as CalendarInfo)} />,
    }

    return componentMap[info.type]
  }

  return (
    <div className="bg-default flex min-w-[320px] flex-col gap-3 rounded-md p-4 shadow-sm">
      {infos.map((info) => renderComponent(info))}
    </div>
  )
}

export default Infos
