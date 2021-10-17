import axios from 'axios';
const compileCode = async (code,lang)=>{
      // const res = await fetch(
        //     `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(code)}&lang=${encodeURIComponent(lang)}`
        //   );
        //url: "http://localhost:8000/api/execute",
       
        const program = {
            "script":`${code}`,
            "language":`${lang}`,
            "versionIndex":"0"
        }
        return await axios({
            method: "POST",
            url: "https://ap-south-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/intereact-usxcf/service/jdoodle/incoming_webhook/execute",
            data: {code,lang},
          })
            .then((res) => {
                // return res.data.response; // if call is to nodejs server
                return res.data; //if call if ro mongo db; 
            })
            .catch((error) => {
              console.log(error);
            });
  

}

export {compileCode};

