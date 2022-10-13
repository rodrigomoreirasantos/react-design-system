import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild?: boolean
}

export function Text({ size='md', children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';
    
    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',
            {
                // Quero aplicar xs quando o size for sm
                'text-xs': size === 'sm', 
                // Quero aplicar sm quando o size for md
                'text-sm': size === 'md',
                // Quero aplicar md quando o size for lg
                'text-md': size === 'lg',
            }
        )}
        
        >
            {children}
        </Comp>
    )
}