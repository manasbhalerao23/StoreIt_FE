import axios from "axios";
import { atom, atomFamily, selectorFamily } from "recoil";
import { contentdata } from "../types";

export const contentAtom = atomFamily({
    key:"contentAtomFamily",
    default: selectorFamily<{
        contents: contentdata[];
        username?: string
    },
    string | null>({
        key:"contentselector",
        get: (id :string | null) => async() => {
            if(!id){
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/content`,
                    {
                        withCredentials: true
                    }
                );
                return response.data;
            }
            else{
                //check point for hitting BE
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brain/${id}`,
                    // {
                    //     withCredentials: true
                    // }
                );
                //console.log("fetched",response.data);
                return {
                    contents: response.data.content, 
                    username: "Shared User", 
                  };
            }
        },
    }),
});

export const currentTabContentsf = selectorFamily<
    {contents: contentdata[];
    username?: string
    },
    string | null
    >({
        key: "currenttabcontent",
        get: 
            (content: string | null) => 
            ({get}) => {
                const contents = get(contentAtom(content));
                const currentTab = get(currentTabAtom);

                if(currentTab === 'All'){
                    return contents;
                }
                //check for contents
                const selectedContent = contents.contents.filter(
                    (c) => c.type === currentTab 
                );

                return {...contents, contents: selectedContent};
            },
});

export const currentTabAtom = atom({
    key: "currentTabAtom",
    default: 'All'
})