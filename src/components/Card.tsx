interface CardProps {
    title: string, 
    description?: string, 
    children?: React.ReactNode
}
export default function Card({title, description, children}: CardProps) {
    return (
        <div className="border rounded-lg p-4 bg-white dark:bg-slate-900">
            <h3 className="font-bold text-lg">{title}</h3>
            {description && <p className="text-gray-600">{description}</p>}
            {children}
        </div>
    );
}