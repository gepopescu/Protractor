import {$$} from "protractor";


export class AllOwnersPage{
    allowners = $$(".ownerFullName a");

    getOwnerName(firstName:string,lastname: string){
        return this.allowners.getText().then(nameOwner => {
         return nameOwner.includes(firstName+" " +lastname);
               // console.log(nameOwner);
        })
    }

}