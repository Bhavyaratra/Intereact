import Editor from "../Editor/Editor"

export default function Room(){
    return(<>
    <div className="container">
     <div className="row">
        <div className="col">
            <Editor/>
        </div>
        <div className="col">
            <div className="row" >
                {/* utilities component */}
            </div>
            <div className="row">
                {/* video component */}
            </div>
        </div>
    </div>

    </div>

        </>)
}