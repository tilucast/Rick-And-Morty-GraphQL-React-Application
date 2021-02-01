import { makeVar, InMemoryCache } from "@apollo/client"

export const apiInformation = 
    makeVar(JSON.parse(localStorage.getItem("apiInformation")) || "")

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                apiInformation: {
                    read(){
                        return apiInformation()
                    }
                }
            }
        }
    }
})

