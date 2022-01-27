import axios from 'axios'
import { get, set, remove } from './storage'
import router from '../router'

/**
 *  Interfaces/Abstractions should be extends classes and modular reusable. 
 *  This is for demo purpose
 */

interface apiData {
  token? :string,
}

interface TokenResult {
  status: boolean
  data?: apiData,
  error?: string
}

interface Token {
  type: string,
  access_token : string,
  refresh: null
  rate_limit : null,
  expires: number
}

//const prefixUrl = process.env.api_prefix as string
const prefixUrl = 'https://nodejs-vending-machine-restapi.herokuapp.com/'
//const prefixUrl = 'http://localhost:3000/'

let task: Promise<string | undefined> | null = null

export const refreshAuth = async (): Promise<string | undefined> => {
  // avoid multiple refresh
  return await (task ?? (task = getAuth()))
}

export const getAuth = async (): Promise<string | undefined> => {
  const token = get<Token>('token')
  if (token == null) return
  if (token.expires > Date.now()) return `${token.type} ${token.access_token}`
  return await refreshAuth()
}

// authorize
export const authenticate = async (username: string, password: string): Promise<Token> => {
  const data  = {username : username, password : password}
  const options = { headers: { "Content-Type": "application/json; charset=utf-8" } }
  const promiseToken = await axios.post(prefixUrl + 'auth', data, 
  options).then( response => { console.log(response); return (response.data.status) ? response.data.token : false } )
    
  if(!promiseToken) throw new Error('Auth Failed!')
   
  const token = {
    type: 'x-access_token',
    access_token: promiseToken,
    refresh: null,
    rate_limit : null,
    expires: Date.now() + 720,
  }
  set('token', promiseToken)
  return token
} 

export const revoke = async (): Promise<void> => {
  const token = get<Token>('token')
  if (token?.refresh == null) return
  await router.replace({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
  remove('token')
}
