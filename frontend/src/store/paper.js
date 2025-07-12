/* import {create} from "zustand"; //global state management library

export const usePaperStore = create((set) => ({
    papers: [],
    setPapers: (papers) => set({ papers }),
    createPaper: async (newPaper) => {
        if(!newPaper.stream || !newPaper.subject || !newPaper.papername || !newPaper.year || !newPaper.papersem || !newPaper.papertype || !newPaper.paperpdf){
            return{ success:false, message: "Please fill in all the fields" };
        }
        else{
            try {
                const response = await fetch("/papers", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPaper),
                });

                const data = await response.json();

                if (data.success) {
                    set((state) => ({
                        papers: [...state.papers, data.data],
                    }));
                    return { success: true, message: "Paper added successfully" };
                } else {
                    return { success: false, message: data.message };
                }
            } catch (error) {
                console.error(`Error: ${error.message}`);
                return { success: false, message: "Server Error" };
            }
        }
    },
}));

 */