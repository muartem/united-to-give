'use client'

import Collapse from '@/assets/svg/collapse'
import Expand from '@/assets/svg/expand'
import {useState} from 'react'

const Accordion = ({classNames, title, children}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`flex w-full rounded-xl md:rounded-3xl px-4 py-2 b1 gap-3 md:gap-6 items-start bg-light-gray text-light-black ${classNames}`}
      onClick={() => setIsExpanded(s => !s)}
    >
      <div className="flex-1 min-h-12 py-2">{title}
        {isExpanded && <pre className="b2 mt-2 md:mt-4 text-wrap">{children}</pre>}
      </div>
      <div className="cursor-pointer w-10">
        {isExpanded ? <Collapse/> : <Expand/>}
      </div>
    </div>
  )
}

export default Accordion
