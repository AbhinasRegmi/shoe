import { cn } from "@/lib/utils";

interface LogoProps {
    className?: string | undefined;
}
export function Logo(props: LogoProps){
    return (
        <div className={cn("", props.className && props.className)}>
            <img className="h-full w-auto object-cover" src={"/images/logo.png"} />
        </div>
    )
}
