import Body from "./componenets/Body"
import UserAuthContextProvider from "./utils/userContext"


function App() {

  return (
    <>
     <UserAuthContextProvider>
      <Body />
    </UserAuthContextProvider>
    </>
  )
}

export default App
