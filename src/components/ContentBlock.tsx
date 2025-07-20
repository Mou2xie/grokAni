

export const ContentBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="max-w-none lg:px-20 py-10 text-white">
            {children}
        </section>
    );
}