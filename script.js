
while(true){
    let deliveryInput = prompt("Введіть в яку країну треба доставити товар")
    deliveryInput = deliveryInput ? deliveryInput.toLowerCase() : null;
    switch(deliveryInput){
        case "китай":
            alert("Доставка в Китай буде коштувати 100 кредитів")
            break;
        case null:
            alert("Скасовано користувачем")
            break;
        case "чилі":
            alert("Доставка в Чилі буде коштувати 250 кредитів")
            break;
        case "австралія":
            alert("Доставка в Австралію буде коштувати 170 кредитів")
            break;
        case "індія":
            alert("Доставка в Індію буде коштувати 80 кредитів")
            break;
        case "ямайка":
            alert("Доставка в Ямайку буде коштувати 120 кредитів")
            break;
            default:
                alert("У вашій країні доставка недоступна")
    }
}
