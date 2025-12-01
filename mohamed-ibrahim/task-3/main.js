const app = document.createElement("div");
app.style.width = "350px";
app.style.margin = "30px auto";
app.style.padding = "20px";
app.style.border = "2px solid black";
app.style.borderTopRightRadius = "10px";
app.style.borderBottomLeftRadius = "10px";
app.style.fontFamily = "Arial";
app.style.background = "#f5f5f5";
document.body.appendChild(app);


const title = document.createElement("h2");
title.innerText = "Calculator";
title.style.textAlign = "center";
title.style.margin = "0 0 20px 0";
app.appendChild(title);

const container = document.createElement("div");
container.style.width = "100%";
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.alignItems = "center";
container.style.marginBottom = "20px";
app.appendChild(container);

const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Number 1";
input1.style.width = "45%";
input1.style.height = "25px";
input1.style.marginBottom = "10px";
container.appendChild(input1);

const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Number 2";
input2.style.width = "45%";
input2.style.height = "25px";
input2.style.marginBottom = "10px";
container.appendChild(input2);


const result = document.createElement("div");
result.style.margin = "10px 0";
result.style.padding = "10px";
result.style.background = "white";
result.style.border = "1px solid #000";
result.style.fontSize = "18px";
result.innerText = "Result: ";
app.appendChild(result);



function createBtn(text, operation) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.style.width = "50px";
    btn.style.height = "40px";
    btn.style.margin = "5px";
    btn.style.fontSize = "18px";

    btn.onclick = () => {
        const n1 = Number(input1.value);
        const n2 = Number(input2.value);
        let res;

        switch(operation) {
            case "add": res = n1 + n2; break;
            case "sub": res = n1 - n2; break;
            case "mul": res = n1 * n2; break;
            case "div": 
                res = n2 == 0 ? "Error (÷0)" : n1 / n2;
                break;
        }

        result.innerText = "Result: " + res;
    };

    app.appendChild(btn);
}

createBtn("+", "add");
createBtn("-", "sub");
createBtn("*", "mul");
createBtn("/", "div");