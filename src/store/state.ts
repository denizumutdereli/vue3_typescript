/*
Beforehand, all will turn to mvc type achitecture and classes interihance
*/

interface Session {
  id?: string
  username?: string
  name?: string
  token? :string //apicall
}

interface Page {
  Page? : string

}

export interface State {
  session: Session
  page : Page
}

const state: State = {
  session: {},
  page : {}
}

export default state
