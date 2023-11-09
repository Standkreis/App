import React from 'react'

import Chip from '@/components/Chip'
import { RangeInfo } from '@/data/ecosystem/plants/types'

const Range = (props: RangeInfo) => {
  const { label, unit, chip, range, hint } = props

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <p className="text-hint font-bold">{label}</p>
        {unit && <p className="text-hint">{`[${unit}]`}</p>}
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex items-center gap-2">
          {chip ? <Chip label={String(range.from)} /> : <p>{range.from}</p>}
          <p className="text-hint">-</p>
          {chip ? <Chip label={String(range.to)} /> : <p>{range.to}</p>}
        </div>
        <p className="text-hint">{hint}</p>
      </div>
    </div>
  )
}

export default Range
