import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className: string
}

const Button = ({  className, ...props }: ButtonProps) => {
    return (
        <button className={twMerge("py-3 px-4 rounded-2xl bg-white w-24 font-semibold text-sm", className)} {...props}>{props.children}</button>
    )
}

export default Button