import {create} from "zustand"; //global state management library

export const usePaperStore = create((set) => ({
    papers: [],
    setPapers: (papers) => set({ papers }),
    createPaper: async (newPaper) => {
        if(!newPaper.stream || !newPaper.subject || !newPaper.papername || !newPaper.year || !newPaper.papersem || !newPaper.papertype){
            return{ success:false, message: "Please fill in all the fields" };
        }
        const res = await fetch("/papers", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newPaper)
        });
        const data = await res.json();
        set((state) => ({
            papers: [...state.papers, data.data]
        }));
        return{ success:true, message: "Paper added successfully" };
    },
}));

