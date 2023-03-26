import { useEffect, useState } from "react";
import Notes from "../components/Notes";
import { getDocs, collection, addDoc, deleteDoc, doc, query, where } from "firebase/firestore";
import { auth, db } from "../config/firebase";

const Entries = () => {

    useEffect(() => {
        if (auth.currentUser.uid!==null) {
            getNotesList();
        }
        else{
            return(
                <h1> loding</h1>
            )
        }
    }, []);

    const [Notesarr, setNotesarr] = useState([]);

    const userid = auth?.currentUser?.uid;
    const notescollectionref = collection(db, "Notes");

    const getNotesList = async () => {
        console.log(userid)
        const q = query(notescollectionref, where("UserId", "==", userid));
        const data = await getDocs(q);
        const filtereddata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(filtereddata)
        setNotesarr(filtereddata);
    }


    async function AddNewNote(item) {
        await addDoc(notescollectionref, item);
        getNotesList();
        //optimistic rendering
        //setNotesarr([...Notesarr,item]);
    }

    async function DeleteNote(id) {
        const notedoc = doc(db, "Notes", id);
        await deleteDoc(notedoc);
        getNotesList();
    }


    return (
        <Notes notes={Notesarr} onNewSave={AddNewNote} onDelete={DeleteNote}/>
    )
}
export default Entries;