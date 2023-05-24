export default function BusinessCard() {
    return (
        // <AnimShape classes="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
        <div className="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
            <h1 className="text-lg font-bold">MATHEW LUONG</h1>
            <h1>Software Developer - Microsoft</h1>
            <p>
                Full stack developer with 5 years of experience leading and
                mentoring engineers.
            </p>
            <div className="float-left bg-yellow-500">
                <div className="flex flex-col items-center gap-2 p-2">
                    <div>12</div>
                    <div>12</div>
                    <div>12</div>
                    <div>12</div>
                </div>
            </div>
        </div>
        // </AnimShape>
    );
}
