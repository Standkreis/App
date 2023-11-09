import React from 'react'

import { Info } from '@/data/ecosystem/plants/types'
import Chip from '@/components/Chip'

const Default = (props: Info) => {
  const { label, unit, chip, value, hint } = props

  return (
    <div className="flex justify-between">
      <div className="flex gap-1">
        <p className="text-hint font-bold">{label}</p>
        {unit && <p className="text-hint">{`[${unit}]`}</p>}
      </div>
      <div className="flex flex-col items-end gap-1">
        {chip ? <Chip label={String(value)} /> : <p>{value}</p>}
        <p className="text-hint">{hint}</p>
      </div>
    </div>
  )
}

export default Default
