export default function pagesApp({ children }: { children: React.ReactNode }) {

    return (
        <div className='max-w-5xl w-full mx-auto py-12 px-12 lg:px-0'>
            {children}
        </div>
    )
}
