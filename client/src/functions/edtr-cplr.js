import axios from 'axios';
const compileCode = async (code,lang)=>{
      // const res = await fetch(
        //     `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(code)}&lang=${encodeURIComponent(lang)}`
        //   );
        const program = {
            "script":`${code}`,
            "language":`${lang}`,
            "versionIndex":"0"
        }
        return await axios({
            method: "POST",
            url: "http://localhost:8000/api/execute",
            data: program,
          })
            .then((res) => {
                return res.data.response;
            })
            .catch((error) => {
              console.log(error);
            });
  

}

export {compileCode};

