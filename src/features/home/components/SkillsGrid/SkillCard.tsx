import { Activity, CheckSquare, Code2, LayoutGrid, MonitorSmartphone, Terminal } from 'lucide-react'

import { Card } from '@/ui/Card'
import { GradientIconBox } from '@/ui/GradientIconBox'
import type { Skill } from './skill-types'

const iconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={40} strokeWidth={1.6} className="text-white" />,
  'layout-grid': <LayoutGrid size={40} strokeWidth={1.6} className="text-white" />,
  activity: <Activity size={40} strokeWidth={1.6} className="text-white" />,
  'monitor-smartphone': <MonitorSmartphone size={40} strokeWidth={1.6} className="text-white" />,
  'check-square': <CheckSquare size={40} strokeWidth={1.6} className="text-white" />,
  terminal: <Terminal size={40} strokeWidth={1.6} className="text-white" />,
}

type Props = { skill: Skill }

export const SkillCard = ({ skill }: Props) => (
  <Card as="article" className="flex flex-col items-center gap-6 text-center">
    <GradientIconBox size={77}>{iconMap[skill.icon]}</GradientIconBox>
    <h3 className="font-semibold text-[22px] text-heading">{skill.title}</h3>
    <p className="text-body text-[16px] leading-[1.55]">{skill.description}</p>
  </Card>
)
