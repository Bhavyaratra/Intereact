import { Container } from "react-bootstrap"

export default function Notes(){
    return(<>
    <Container className="p-0" style={{"overflow-y":"auto","max-height":'60vh'}} >
        <textarea 
            class="form-control text-monospace border-0" 
            id="utility-textarea"
            spellCheck="false"
        >
        </textarea>
    </Container>

        </>)
}