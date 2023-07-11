import { Input, Button, HStack } from "native-base";
import { useState } from "react";


export default function ToDoHeader({ setTodoItems, user }) {
const [newItem, setNewItem] = useState("")

const addNewItems = () => {
    if(newItem.length < 3) return
    const newTodoItem = {
        uid: user.uid,
        title: newItem,
    }
    fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`,{
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodoItem),
    })
    .then(res => res.json())
    .then(setTodoItems)
    .catch(alert)
    .finally(() => setNewItem(""))
}

    return(
        <HStack space={2}>
            <Input value={newItem} onChangeText={setNewItem} size="lg" color="coolGray.200" flex={1} placeholder="Add Item"/>
            <Button onPress={addNewItems}>add</Button>
        </HStack>
    )
}