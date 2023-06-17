import Tab from "@mui/base/Tab";
import TabsList from "@mui/base/TabsList";

export function TemplateTabs() {
    return (
        <TabsList className="flex flex-wrap max-w-full gap-4 mt-2">
            <Tab
                value="standard"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-black rounded-s-full"></div>
                <div className="w-1/2 h-full bg-gradientBg rounded-e-full"></div>
            </Tab>
            <Tab
                value="black"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-black rounded-s-full"></div>
                <div className="w-1/2 h-full bg-[#65FFA3] rounded-e-full"></div>
            </Tab>
            <Tab
                value="whiteBlack"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-white rounded-s-full"></div>
                <div className="w-1/2 h-full bg-black rounded-e-full"></div>
            </Tab>
            <Tab
                value="purple"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-[#6C63FF] rounded-s-full"></div>
                <div className="w-1/2 h-full bg-white rounded-e-full"></div>
            </Tab>
            <Tab
                value="orange"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-[#FF7474] rounded-s-full"></div>
                <div className="w-1/2 h-full bg-black rounded-e-full"></div>
            </Tab>
            <Tab
                value="white"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-white rounded-s-full"></div>
                <div className="w-1/2 h-full bg-black rounded-e-full"></div>
            </Tab>
            <Tab
                value="gray"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-[#424242] rounded-s-full"></div>
                <div className="w-1/2 h-full bg-[#FFBD44] rounded-e-full"></div>
            </Tab>
            <Tab
                value="column"
                className="flex border-2 border-gray h-[40px] w-[40px] rounded-full p-[2px]"
            >
                <div className="w-1/2 h-full bg-black rounded-s-full"></div>
                <div className="w-1/2 h-full bg-[#FF7474] rounded-e-full"></div>
            </Tab>
        </TabsList>
    );
}
