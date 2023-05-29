import { Fragment, useState } from "react"
import ChildA from "./component/ChildA"

const LearnPropDrilling = () => {


    const [name, setname] = useState("Maha")

return (
    
    <Fragment>
        <h1 ClassName="text-center mt-5">
        Learn Prop Drilling
    </h1>
<ChildA firstname={name} />

    </Fragment>
)
}

export default LearnPropDrilling 