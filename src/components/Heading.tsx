import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg'
    children: ReactNode
    asChild: boolean
}

export function Heading({ size='md', children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';
    
    return(
        <Comp className={clsx(
            'text-gray-100 font-bold font-sans',
            {
                // Quero aplicar xs quando o size for sm
                'text-lg': size === 'sm', 
                // Quero aplicar sm quando o size for md
                'text-xl': size === 'md',
                // Quero aplicar md quando o size for lg
                'text-2xl': size === 'lg',
            }
        )}
        
        >
            {children}
        </Comp>
    )
}