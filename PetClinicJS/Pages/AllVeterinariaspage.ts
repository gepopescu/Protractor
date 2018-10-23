import {$$} from "protractor";

export class AllVeterinariasPage {
    allVeterinarias = $$(" table.table.table-striped tr > td:nth-child(1)");
    editButton =$$("table.table.table-striped td:nth-child(3) > button.btn.btn-default:nth-child(1)");
    deleteButton =$$("table.table.table-striped td:nth-child(3) > button.btn.btn-default:nth-child(2)");

    getEditButton(firstName:string,lastname: string) : void{
        this.allVeterinarias.getText().then(nameVet => {

            for(var i=0;i<nameVet.length;i++){
                console.log(nameVet[i]);
                if (nameVet[i]== firstName+" " +lastname){
                    var poz = i;
                    console.log(nameVet[poz]);
                    console.log(poz);
                }
            }
            this.editButton.get(poz).click();
        })
    }

    getVeterinariasName(firstName:string,lastname: string){
        return this.allVeterinarias.getText().then(nameVet => {
            return nameVet.includes(firstName+" " +lastname);
            // console.log(nameOwner);
        })
    }

    getDeleteButton(firstName:string,lastname: string) : void{
        this.allVeterinarias.getText().then(nameVet => {

            for(var i=0;i<nameVet.length;i++){
                if (nameVet[i]== firstName+" " +lastname){
                    var poz = i;
                    console.log(nameVet[poz]);
                    console.log(poz);
                }
            }
            this.deleteButton.get(poz).click();
        })
    }


}