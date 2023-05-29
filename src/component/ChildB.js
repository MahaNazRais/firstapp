import { Fragment } from "react"
import ChildC from "./ChildC"

const ChildB = () => {
    return (
        <Fragment>
           <h1>
               Child B
           </h1>
           <ChildC />
        </Fragment>
          
    )
    }
    export default ChildB