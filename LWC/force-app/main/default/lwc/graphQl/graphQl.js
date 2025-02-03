import { LightningElement ,wire} from 'lwc'
import {gql, graphql} from 'lightning/uiGraphQLApi'
export default class GraphQl extends LightningElement {

    @wire(graphql, {
        query: gql`
            query getAccounts {
                uiapi {
                    query {
                        Account(
                            where: { Name: { ne: null } }
                            first: 5
                            orderBy: { Name: { order: ASC } }
                        ) {
                            edges {
                                node {
                                    Id
                                    Name {
                                        value
                                    }
                                    Phone {
                                        value
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    })
    graphql({data,errors}){

        let accounts = [];

        if(data){

            data.uiapi.query.Account.edges.map((edge)=>{
                accounts.push(edge.node.Name.value)

            })


        }
        console.log(accounts)
            
    }


   
   
}