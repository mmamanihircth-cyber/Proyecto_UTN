import "./Messages.css"

const Messages = ({ contact_selected }) => {
    return (
        <div className="messages_container">
            {contact_selected.messages.map(message => {
                const isMe = message.send_by_me;
                const isGroup = contact_selected.isGroup;

                return (
                    <div 
                        key={message.id} 
                        className={isMe ? "message_row me" : "message_row other"}
                    >
                        {isGroup && !isMe && (
                            <img 
                                src={message.author_img || "https://via.placeholder.com/40"} 
                                className="message_author_pic" 
                                alt={message.author} 
                            />
                        )}
                        <div className={isMe ? "message me" : "message other"}>
                            {isGroup && !isMe && (
                                <span className="message_author_name">
                                    {message.author}
                                </span>
                            )}
                            
                            <p>{message.text}</p>
                            <span>{message.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Messages