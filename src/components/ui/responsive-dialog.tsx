// components/ui/responsive-modal.tsx

'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from '@/components/ui/drawer'

import { useMediaQuery } from '@/hooks/use-media-query'
import type { ReactNode } from 'react'

type ResponsiveModalProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    title?: string
    description?: string
    children: ReactNode
}

export const ResponsiveModal = ({
    open,
    onOpenChange,
    title,
    description,
    children,
}: ResponsiveModalProps) => {
    const isDesktop = useMediaQuery('(min-width: 768px)')

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent>
                    {(title || description) && (
                        <DialogHeader>
                            {title && <DialogTitle>{title}</DialogTitle>}
                            {description && <DialogDescription>{description}</DialogDescription>}
                        </DialogHeader>
                    )}
                    {children}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            <DrawerContent>
                {(title || description) && (
                    <DrawerHeader>
                        {title && <DrawerTitle>{title}</DrawerTitle>}
                        {description && <DrawerDescription>{description}</DrawerDescription>}
                    </DrawerHeader>
                )}
                <div className="p-4">{children}</div>
            </DrawerContent>
        </Drawer>
    )
}
