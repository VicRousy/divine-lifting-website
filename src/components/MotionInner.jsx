import { motion } from 'framer-motion'

export default function MotionInner({ as = 'div', children, ...props }) {
  const Component = motion[as]
  return <Component {...props}>{children}</Component>
}
