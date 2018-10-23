import {$$, by, element} from "protractor/built";

export class MenuPage{
    menuItems = element.all(by.css(".nav.navbar-nav li a"));


    homeButton = this.menuItems.get(0);
    ownersButton = this.menuItems.get(1);
    veterinarians = this.menuItems.get(4);
    petTypesButton =this.menuItems.get(7);
    specialitiesButton = this.menuItems.get(8);
    allOwnerButton = this.menuItems.get(2);
    addNewOwnerButton = this.menuItems.get(3);
    allVeterinariasButton = this.menuItems.get(5);
    addNewVeterinariasButton = this .menuItems.get(6);

    clickOwnersButton(): void {
        this.ownersButton.click()
    }

    clickAddOwnersButton(): void {
        this.addNewOwnerButton.click()
    }

    clickAllOwnersButton(): void {
        this.allOwnerButton.click()
    }
    clickVeteriniariasButton(): void {
        this.veterinarians.click()
    }

    clickAddVeteriniariasButton(): void {
        this.addNewVeterinariasButton.click()
    }

    clickAllVeterinariasButton(): void {
        this.allVeterinariasButton.click()
    }

}