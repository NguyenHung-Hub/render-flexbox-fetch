window.onload = async () => {
    const getConversations = async () => {
        return (await fetch(`http://localhost:3000/conversations`)).json();
    };

    let conversations = await getConversations();

    function _createElement(
        name = "div",
        className = "",
        id = "",
        text = "",
        atr = {}
    ) {
        const element = document.createElement(`${name}`);

        if (className) {
            className
                .trim()
                .split(" ")
                .forEach((c) => element.classList.add(c));
        }
        if (id) {
            element.id = id.trim();
        }
        if (text) {
            element.innerText = text;
        }

        if (Object.keys(atr).length !== 0) {
            for (const [key, value] of Object.entries(atr)) {
                element.setAttribute(`${key}`, `${value}`);
            }
        }
        return element;
    }

    const message = _createElement("div", "message");
    const conversationsNode = conversations.map((conv, index) => {
        const messageClone = message.cloneNode(true);
        messageClone.id = conv.auth;
        messageClone.appendChild(
            _createElement("p", "message-content", "", `${conv.message}`)
        );

        return messageClone;
    });

    const messages = _createElement("div", "messages");
    conversationsNode.forEach((conv) => messages.append(conv));

    document.querySelector(".chat-box-center").appendChild(messages);

    //handle send message

    const postMessage = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(data),
        });

        return res;
    };

    const handleSendMessage = (event) => {
        const text = input.value;

        postMessage("http://localhost:3000/conversations", {
            id: +new Date(),
            message: text,
            auth: "you",
        }).then((data) => console.log(data));
    };

    const input = document.querySelector(".chat-input");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleSendMessage(event);
        }
    });

    document
        .querySelector(".submit-btn")
        .addEventListener("click", function (event) {
            handleSendMessage(event);
        });
};
