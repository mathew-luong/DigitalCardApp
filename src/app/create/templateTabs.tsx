import Tab from "@mui/base/Tab";
import TabsList from "@mui/base/TabsList";

export function TemplateTabs() {
    return (
        <TabsList className="flex flex-wrap max-w-full gap-4 mt-2">
            <Tab
                value="standard"
                className="p-4 bg-black border-4 border-transparent rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="black"
                className="p-4 bg-[#65FFA3] border-4 border-transparent rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="whiteBlack"
                className="p-4 bg-gradient-to-tl from-white to-black border-4 border-[#C6C6C6] rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="purple"
                className="p-4 bg-[#6C63FF] border-4 border-transparent rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="orange"
                className="p-4 bg-[#FF7474] border-4 border-transparent rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="white"
                className="p-4 bg-white border-4 border-[#C6C6C6] rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="gray"
                className="p-4 bg-[#424242] border-4 border-transparent rounded-full hover:shadow-xl"
            ></Tab>
            <Tab
                value="column"
                className="p-4 bg-gradient-to-tl border-transparent from-black to-[#424242] border-4 rounded-full hover:shadow-xl"
            ></Tab>
        </TabsList>
    );
}
