import { Fragment } from "react"
import ChildB from "./ChildB"

const ChildA = ({firstname}) => {
return (
    <Fragment>
       <h1>
           Child A
       </h1>

       <ChildB firstname={firstname} />

    </Fragment>
       
)
}
export default ChildA