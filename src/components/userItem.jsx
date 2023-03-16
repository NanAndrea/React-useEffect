export function UserItem({name, email, networthStatus}){
    //cu if statment
    let networthStatusText="";
    if(networthStatus === "up"){
        networthStatusText ="Networth in crestere";
    }else if(networthStatus === "same"){
        networthStatusText = "Networth constant";
    } else if(networthStatus==="down"){
        networthStatusText = "Networth in scadere";
    }

    //cu o functie
    function renderNetworkthStatusText(){
        switch(networthStatus){
            case "up":
                return "Networth in crestere";
            case "same":
                return  "Networth constant";
            case "down":
                return "Networth in scadere";
                default:
                    return "";

    }
}
     
    
    
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{networthStatusText}</p>
            <p>{renderNetworkthStatusText()}</p>
            
            
        </div>
    );
}