import {RefObject, useEffect, useRef, useState} from "react";

type DragAndDropOptions = {
    onPositionChange: (position:{left: number, top: number})=>void;
};

function useDragAndDrop(
    {
        elementRef,
        isActive,
    }:{elementRef: RefObject<HTMLDivElement>; isActive: boolean},
    options: DragAndDropOptions,
    ){
    const[isDragging, setIsDragging] = useState(false);
    const startPos = useRef({left:0, top:0});

    useEffect(() => {
        const element =elementRef.current;
        const onMouseMove = (e:MouseEvent) => {
            if (elementRef.current&&isActive){
                const delta = {
                    left: e.clientX - startPos.current.left,
                    top: e.clientY - startPos.current.top,
                };
                options.onPositionChange(delta);
            }
        };

        const onMouseUp = ()=>{
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseupp", onMouseUp);
            setIsDragging(false);
        };
        const onMouseDown = (e:MouseEvent)=>{
            if(e.defaultPrevented){
                return;
            }
            if(elementRef.current){
                e.preventDefault();
                startPos.current={
                    left:e.clientX,
                    top: e.clientY,
                };
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
                if(isActive){
                    setIsDragging(true);
                }
            }
        };

        if(element && isActive){
            element.addEventListener("mousedown", onMouseDown);
        }
        return () =>{
            if(element&& isActive){
                element.removeEventListener("mousedown", onMouseDown);
            }
        };
    }, [elementRef, isActive, options]);

    return{isDragging};
}

export {useDragAndDrop};
