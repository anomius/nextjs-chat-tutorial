import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context";

import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const ChatEngine = dynamic(() =>
    import ("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
    import ("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Home() {
    const { username, secret } = useContext(Context);
    const [showChat, setShowChat] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (typeof document !== undefined) {
            setShowChat(true);
        }
    }, []);

    useEffect(() => {
        if (username === "" || secret === "") {
            router.push("/");
        }
    }, [username, secret]);

    if (!showChat) return <div / > ;

    return ( <
        div className = "background" >
        <
        div className = "shadow" >
        <
        ChatEngine height = "calc(100vh - 212px)"
        projectID = "f4500983-db76-4fa3-a3c8-7f5b3e79b56f"
        userName = { username }
        userSecret = { secret }
        renderNewMessageForm = {
            () => < MessageFormSocial / > }
        /> <
        /div> <
        /div>
    );
}