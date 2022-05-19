var textextract = require('textract');

const textract =async (req,res)=>{
    const url = req.body.url;
    console.log(url);
    textextract.fromUrl(url,
    function( error, text ) {
        if(error){
            console.log("err",error);
            res.json({success:false,error:`err : ${error}` })
        }else{
            res.status(200).json({success:true,text: text});
        }
    })
}

module.exports= {textract};