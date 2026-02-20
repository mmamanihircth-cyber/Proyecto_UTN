const Messages = ({contact_selected}) => {
    return (
        <div className="messages_container">
            {
            contact_selected.messages.map(message => {
                return (
                <div key={message.id}
                className={message.send_by_me ? "message me" : "message other"}>
                    <p>{message.text}</p>
                    <span>{message.time}</span>
                </div>
                )
            })}
        </div>
    )
}

export default Messages