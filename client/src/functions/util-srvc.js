import axios from 'axios';

import firebase from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const db = getFirestore(firebase);

const textract = async (url)=>{
      return await axios({
          method: "POST",
          url: 'http://localhost:8000/api/textract',
          data: {url:url},
        })
        .then((res) => {
            console.log(res);
            return res.data; 
        })
        .catch((error) => {
        console.log(error);
        });

}

const sendFile = async (file,data)=>{
    const filename = file.name
    try{
        const storage = getStorage();
        const storageRef = ref(storage, `pdf/${Date.now()}_${filename}`);
        return uploadBytes(storageRef, file)
        .then((snapshot)=>{
            return getDownloadURL(storageRef)
            .then(async (url) => {
                const doc = {
                    crts: new Date(),
                    link: url,
                    name: file.name,
                    rmid: data.rmid,
                }
                const docRef = await addDoc(collection(db,'docx'),doc);
                return url;
            })
        })
    }catch(err){
        console.log("Error: sendFile()",err);
    }
}
export {textract,sendFile};

