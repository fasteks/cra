import React, { FC } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  solid = 'solid'
}

interface CardProps {
  width?: string,
  height?: string,
  children: React.ReactNode,
  variant: CardVariant
}

const Card: FC<CardProps> = ({ width, height, children, variant }) => {
  return (
    <div style={{
      width,
      height,
      border: variant === CardVariant.outlined ? '5px solid yellow' : 'none',
      background: variant === CardVariant.solid ? 'green' : ''
    }}
    >
      {children}
    </div>
  )
}

export default Card