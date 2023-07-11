
import { useState, useEffect } from "react";
import { Text, Center, Box, Heading, VStack, Checkbox, HStack } from "native-base";
import ToDoHeader from "./TodoHeader";


export default function TodoList({ user }) {
const [todoItems, setTodoItems] = useState()

useEffect(() => {
    if(user) {
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
},[user])
 
    const handleItemUpdate = (id, done) => {
        const itemUpdate = { id, done: !done}
        fetch(`https://checkov-api-sh.web.app/tasks/${user.uid}`,{
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(itemUpdate)
        })
        .then(res => res.json())
        .then(data => {
            setTodoItems(data)
        })
        .catch(alert)
    }


  return (
    <Center w="100%">
        <Box maxW={300} w="100%"  >
            <VStack space={4} fontSize='3xl' >
                <ToDoHeader user={user} setTodoItems={setTodoItems} />
                {!todoItems
                    ? <Text fontSize='xl' width="100%" color="coolGray.300" textAlign="center"> Loading </Text>
                    : todoItems.map(item => {
                        // const thisItemId = item.Id
                        // const thisItemDone = item.done
                        return(
                        <HStack key={item.id} w="100%" justifyContent={"space-between"} alignItems="center">
                            <Checkbox 
                            aria-label={item.title}
                            isChecked={item.done}
                            onChange={ () => handleItemUpdate(item.id, item.done) }
                            />
                            <Text 
                             fontSize={18}
                             mx={2}
                             onPress={ () => handleItemUpdate(item.id, item.done) }

                             strikeThrough={item.done}
                             color={item.done ? 'coolGray.500' : "coolGray.100"}
                             textAlign="left"
                             width="100%"

                            >{item.title}</Text>

                        </HStack>
                    )})
                }
            </VStack>
        </Box>
    </Center>
    
  );
}

