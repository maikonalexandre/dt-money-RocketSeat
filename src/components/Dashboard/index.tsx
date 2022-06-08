import { Summary } from "../Summary"
import { TransactionsTablle } from "../TransactionsTabble"
import { Container } from "./styles"
export function Dashboard(){
    return(
    <Container>

    <Summary/>
    <TransactionsTablle/>
    </Container>
    )
}