import axios from 'axios';
const compileCode = async (code,lang)=>{
      // const res = await fetch(
        //     `https://Wandbox-API.snowballsh.repl.co?code=${encodeURIComponent(code)}&lang=${encodeURIComponent(lang)}`
        //   );
        const program = {
            "clientId": "a3ff0a426efbf5f3e1c55a9ee31fbedf",
            "clientSecret":"9350deb056b7f5a897504bacc983d4155a8b9e45c1d62b8bec052405190894e1",
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

