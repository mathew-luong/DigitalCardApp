export default function BusinessCard() {
    return (
        <div className="p-4 bg-[#000000] rounded-xl md:absolute md:right-[10%] lg:right-[10%] xl:-left-[10%] min-h-[15rem] sm:min-h-[17rem] sm:aspect-[16/10]">
            <h1 className="font-bold text-lg">MATHEW LUONG</h1>
            <h1>Software Developer - Microsoft</h1>
            <p>
                Full stack developer with 5 years of experience leading and
                mentoring engineers.
            </p>
            <div className="float-left bg-yellow-500">
                <div className="flex flex-col gap-2 p-2 items-center">
                    <div>12</div>
                    <div>12</div>
                    <div>12</div>
                    <div>12</div>
                </div>
            </div>
        </div>
    );
}
