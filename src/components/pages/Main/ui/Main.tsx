import { Context } from "context"
import { useContext } from "react"

export const Main = () => {
    const { state } = useContext(Context); 
    
    return (
        <h1>Main {state.state}</h1>
    )
}