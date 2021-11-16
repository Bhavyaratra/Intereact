import app from '../realm';

export const compileCode = async (code,lang)=>{
    const data = {code,lang}
    const res = await app.currentUser.functions.compileCode(JSON.stringify(data));
    return res;
    /*
     data {code : " ", lang : " "}
    */
}
