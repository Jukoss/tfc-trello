import { useAddBoardMutation } from "@/app/core/types";
import { useState } from "react";
import { Input } from "../Input";

interface AddButtonProps {
    className: string,
    title: string,
    onAddHandler: (title: string) => void,
}

export const AddButton = ({ className, title, onAddHandler }: AddButtonProps) => {

    const [isButtton, setIsButton] = useState(true);

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            onAddHandler(event.target.value);
            setIsButton(true);
        }
    }

    return (
        <>
            {
                isButtton ? (
                    <button onClick={() => setIsButton(false)} className={className}>
                        <h5>{title}</h5>
                    </button>
                ) : (
                    <div className={className}>
                        <Input
                            onBlur={() => setIsButton(true)}
                            onKeyDown={handleKeyDown}
                            name="title"
                            placeholder="New Board"
                            autoFocus
                        />
                    </div>
                )
            }
        </>
        
    );
}