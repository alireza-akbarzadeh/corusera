'use client';
import { useId, useState } from 'react';
import { CircleAlertIcon, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ConfirmDialogProps {
    /** The text that needs to be entered for confirmation */
    confirmationText: string;
    /** Trigger button text */
    triggerText?: string;
    /** Trigger button variant */
    triggerVariant?: 'destructive' | 'outline' | 'default' | 'secondary' | 'ghost' | 'link';
    /** Dialog title */
    title?: string;
    /** Dialog description */
    description?: string;
    /** Input label text */
    inputLabel?: string;
    /** Custom icon to display */
    icon?: LucideIcon;
    /** Icon size */
    iconSize?: number;
    /** Callback when confirmation is successful */
    onConfirm: () => void;
    /** Additional styles for the dialog */
    className?: string;
    /** Whether to show the cancel button */
    showCancel?: boolean;
    /** Text for the confirm button */
    confirmText?: string;
    /** Text for the cancel button */
    cancelText?: string;
}

export function ConfirmDialog(props: ConfirmDialogProps) {
    const {
        confirmationText,
        triggerText = 'Delete',
        triggerVariant = 'destructive',
        title = 'Final confirmation',
        description = 'This action cannot be undone. To confirm, please enter:',
        inputLabel = 'Confirmation text',
        icon: Icon = CircleAlertIcon,
        iconSize = 16,
        onConfirm,
        className,
        showCancel = true,
        confirmText = 'Confirm',
        cancelText = 'Cancel',
    } = props

    const id = useId();
    const [inputValue, setInputValue] = useState('');

    const handleConfirm = () => {
        if (inputValue === confirmationText) {
            onConfirm();
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={triggerVariant}>{triggerText}</Button>
            </DialogTrigger>
            <DialogContent className={className}>
                <div className="flex flex-col items-center gap-2">
                    <div
                        className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                        aria-hidden="true"
                    >
                        <Icon className="opacity-80" size={iconSize} />
                    </div>
                    <DialogHeader>
                        <DialogTitle className="sm:text-center">{title}</DialogTitle>
                        <DialogDescription className="sm:text-center">
                            {description} <span className="text-primary">{confirmationText}</span>.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleConfirm();
                    }}
                    className="space-y-5"
                >
                    <div className="*:not-first:mt-2">
                        <Label htmlFor={id}>{inputLabel}</Label>
                        <Input
                            id={id}
                            type="text"
                            placeholder={`Type ${confirmationText} to confirm`}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        {showCancel && (
                            <DialogClose asChild>
                                <Button type="button" variant="outline" className="flex-1">
                                    {cancelText}
                                </Button>
                            </DialogClose>
                        )}
                        <Button
                            type="submit"
                            variant={triggerVariant}
                            className="flex-1"
                            disabled={inputValue !== confirmationText}
                        >
                            {confirmText}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}



//sample usage
{/* <ConfirmDialog
    confirmationText="DANGERZONE"
    triggerText="Dangerous Action"
    title="Are you absolutely sure?"
    description="This will permanently delete all your data. Type:"
    onConfirm={() => console.log('Confirmed!')}
    confirmText="I understand, proceed"
    icon={AlertTriangleIcon}
    iconSize={20}
/> */}