import { LightningElement ,wire} from 'lwc';

import {gql,graphql} from 'lighngint/uiGraphQlApi'
export default class GraphQl extends LightningElement {

      
         constructor(){
            super();
         }

         @wire(graphql,{
               query: gql`
                 query AccountInfo {
                   Account(Where : { Name : {"Test"}}){
                      
                   }
                 }

               `

         })
         accounts

}