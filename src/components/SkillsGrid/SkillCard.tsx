import {
  Activity,
  CheckSquare,
  Code2,
  LayoutGrid,
  MonitorSmartphone,
  Terminal,
} from 'lucide-react'

import type { Skill } from '@/data/skills'

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
  <article className="flex flex-col items-center gap-6 bg-card-warm rounded-xl p-[50px] text-center">
    <div
      className="flex items-center justify-center rounded-lg"
      style={{
        width: 77,
        height: 77,
        background: 'linear-gradient(135deg, #9a5cff, #681aff)',
        boxShadow: 'inset 0 0 14px 4px rgba(255,255,255,0.45)',
      }}
    >
      {iconMap[skill.icon]}
    </div>
    <h3 className="font-semibold text-[22px] text-heading">{skill.title}</h3>
    <p className="text-body text-[16px] leading-[1.55]">{skill.description}</p>
  </article>
)
