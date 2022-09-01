window.onload = () => {
    const conversations = [
        `Hello, are you Jeffrey?`,
        `No, I'm not. My name is Michael. Jeffrey is my brother`,
        `Hi Michael. My name is Mary Garcia. How are you?`,
        `I'm fine. It's nice to meet you, Mary.`,
        `It's nice to meet you, too. Where is your brother?`,
        `He is at work.`,
        `How old are you?`,
        `I am 25 year old`,
        `Where are you from?`,
        `I am from New York`,
    ];

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

    const root = _createElement("div", "root", "", "");
    const chatBox = _createElement("div", "chat-box");
    const chatBoxTop = _createElement("div", "chat-box-top", "", "Live chat");
    const chatBoxCenter = _createElement("div", "chat-box-center");
    const chatBoxBottom = _createElement("div", "chat-box-bottom");

    const messages = _createElement("div", "messages");

    const input = _createElement("input", "chat-input", "", "", {
        placeholder: "Aa",
    });

    const btn = _createElement("button", "submit-btn", "", "Send");

    const message = _createElement("div", "message");
    const conversationsNode = conversations.map((conv, index) => {
        const messageClone = message.cloneNode(true);
        messageClone.id = index % 2 == 0 ? "you" : "other";
        messageClone.appendChild(
            _createElement("p", "message-content", "", `${conv}`)
        );

        return messageClone;
    });

    conversationsNode.forEach((conv) => messages.append(conv));

    chatBoxCenter.appendChild(messages);

    chatBoxBottom.append(input);
    chatBoxBottom.append(btn);

    chatBox.append(chatBoxTop);
    chatBox.append(chatBoxCenter);
    chatBox.append(chatBoxBottom);
    root.appendChild(chatBox);

    document.body.appendChild(root);
};
