function main() {
    let root = document.getElementById("root");
    root.appendChild(createFormApp());
}

function createFormApp() {
    let div = document.createElement("div");
    div.classList.add("container");

    let heading = document.createElement("h2");
    heading.appendChild(document.createTextNode("LOGIN"));

    div.appendChild(heading)
    div.appendChild(formComponent ());

    return div;
}

function formComponent() {
    let div = document.createElement("div");
    div.classList.add("form-container");

    let form = document.createElement("form");
    form.id = "form";

    function onSubmit() {
        let elements = document.getElementById("form").elements;
        let formObject = {};
        
        for (let i = 0; i < elements.length - 1; i++) {
            let item = elements.item(i);

            formObject[item.name] = item.value;
        }

        console.log(formObject);
        document.getElementById("form").reset();

    }

    form.appendChild(inputComponent("Login", undefined, undefined, "Username or email" ));
    form.appendChild(inputComponent("Password", "password", undefined, "Password"));
    form.appendChild(buttonComponent("Submit", undefined, onSubmit));

    div.appendChild(form);

    return div;
}

function inputComponent(name, type = "text", value = "", placeholder) {
    let div = document.createElement("div");
    div.classList.add("input-field");

    // let labelName = document.createElement("label");
    // labelName.appendChild(document.createTextNode (label));
    let span = document.createElement("span");

    let inputField = document.createElement("input");

    inputField.classList.add("input");

    inputField.type = type;
    inputField.name = name;
    inputField.value = value;
    inputField.id = `user${name}`;
    inputField.autocomplete = "off";
    inputField.placeholder = placeholder;

    // div.appendChild(labelName);
    div.appendChild(inputField);
    div.appendChild(span);

    return div;
}

function buttonComponent(text, type = "button", action) {
    let button = document.createElement("button");

    button.classList.add("button");

    button.innerHTML = text;
    button.type = type;
    button.onclick = action;

    return button;
}

main();