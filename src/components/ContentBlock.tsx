

export const ContentBlock = ({ id, children }: { id: string; children: React.ReactNode }) => {
    return (
        <section className="my-10 p-5 bg-[#463a5f] rounded-lg text-white" id={id}>
            {children}
        </section>
    );
}