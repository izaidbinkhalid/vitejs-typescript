import { ChatRowProps } from 'Interfaces/User'
import { MessageProps } from '../Message'

export const chatsList: ChatRowProps[] = [
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h",
        name: "Tom Holland", date: '2:30pm', isOnline: false,
        unreadMessageCount: 0,
        lastMessage: "Yeah, i was working on that thing you told me "
    },
    {
        avatar: "https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg",
        name: "Tom Cruise", date: '5:15pm', isOnline: true,
        unreadMessageCount: 0,
        lastMessage: "What's up?? ready to go?"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzUiYo7jQSIRnWtiRglFnZYbeTxsLiIoWOg&usqp=CAU",
        name: "Angelina Jolie", date: '5:20pm', isOnline: true,
        lastMessage: "I told you, don't call me again on this number"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h",
        name: "Tom Holland", date: '2:30pm', isOnline: false,
        unreadMessageCount: 0,
        lastMessage: "Yeah, i was working on that"
    },
    {
        avatar: "https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg",
        name: "Tom Cruise", date: '5:15pm', isOnline: true,
        unreadMessageCount: 1,
        lastMessage: "What's up?? ready to go?"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzUiYo7jQSIRnWtiRglFnZYbeTxsLiIoWOg&usqp=CAU",
        name: "Angelina Jolie", date: '5:20pm', isOnline: true,
        lastMessage: "I told you, don't call me again on this number"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h",
        name: "Tom Holland", date: '2:30pm', isOnline: false,
        unreadMessageCount: 3,
        lastMessage: "Yeah, i was working on that"
    },
    {
        avatar: "https://www.biography.com/.image/t_share/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg",
        name: "Tom Cruise", date: '5:15pm', isOnline: true,
        unreadMessageCount: 1,
        lastMessage: "What's up?? ready to go?"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzUiYo7jQSIRnWtiRglFnZYbeTxsLiIoWOg&usqp=CAU",
        name: "Angelina Jolie", date: '5:20pm', isOnline: true,
        lastMessage: "I told you, don't call me again on this number"
    },
    {
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKRizGW6Md-BUD5MchQ_UWgYZVKwNQxoPzQte9r0fwSQzBV6h",
        name: "Tom Holland", date: '2:30pm', isOnline: false,
        unreadMessageCount: 3,
        lastMessage: "Yeah, i was working on that"
    },

]
export const messagesList: MessageProps[] = [
    {
        message: "Hi How are you?",
        timeStamp: '2:20pm',
        isReceiver: true
    },
    {
        message: "I am good , how are you ?",
        timeStamp: '2:20pm',
        isReceiver: false
    },
    {
        message: "available for a short meeting?",
        timeStamp: '2:22pm',
        isReceiver: true
    },
    {
        message: "not sure , may be in the night",
        timeStamp: '2:23pm',
        isReceiver: false
    },
    {
        message: "i'll be going out in few minutes , so see you at night",
        timeStamp: '2:23pm',
        isReceiver: false
    },
    {
        message: "Oh ok ok ok ...",
        timeStamp: '2:24pm',
        isReceiver: true
    },
    {
        message: "yeah",
        timeStamp: '2:25pm',
        isReceiver: false
    },
]