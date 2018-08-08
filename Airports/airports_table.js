let counter = 0;

let setOperator = (operator) => {
    document.getElementById("operator").innerHTML = operator;
}

let setAirline = (airline) => {
    document.getElementById("airline").innerHTML = airline;
}

let setTimeHelper = (element, counter) => {

    let time = document.getElementById(element);

    if (!counter) {

        let date = new Date();
        let hours = date.getHours();
        let mins = date.getMinutes();

        time.insertAdjacentHTML('beforeend', '<br><br>' + hours + ":" + mins);
        time.disabled = true;

        counter++;
    }

    else {
    //   // dept_time.insertAdjacentHTML('afterend', '<li><button type="button" onclick="setTime()">Update</button></li>')
        //dept_time.addEventListener("mouseover", function (event) {
        //    let ul = document.getElementById("subButtons");
        //    let li = document.createElement('li');
        //    li.setAttribute("id", 'update');
        //    li.appendChild(document.createTextNode('Update'));
        //    ul.appendChild(li);            
        //})

    }
}

let setDeptTime = (element) => {
    let counter = 0;
    setTimeHelper(element, counter);
}

let setArrvTime = (element) => {
    let counter = 0;
    setTimeHelper(element, counter);
}