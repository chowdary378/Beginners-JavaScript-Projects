function CalculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    if (name1 === "" || name2 === "") {
        alert("Please enter both names");
    } else {
        let lovePercentage;
        let message;
        
        if (name1.toLowerCase() === "sujjit" || name2.toLowerCase() === "sujjit" || name1.toLowerCase() === "indu" || name2.toLowerCase() === "indu" || name1.toLowerCase() === "manikanta" || name2.toLowerCase() === "manikanta") {
            lovePercentage = 100;
            message = `${name1} and ${name2}'s Love percentage: ${lovePercentage}<br>I've never seen great lovers like you!`;
        } else {
            lovePercentage = Math.floor(Math.random() * 101);
            message = `${name1} and ${name2}'s Love percentage: ${lovePercentage}`;
            
            if (lovePercentage < 30) {
                message += '<br> Not a Great Match. Keep Looking';
            } else if (lovePercentage >= 30 && lovePercentage <= 70) {
                message += "<br> There is a Chance. You can try!";
            } else {
                message += "<br> Great Match! Love is in the Air!";
            }
        }
        
        const result = document.getElementById("result");
        result.innerHTML = message;
    }
}
