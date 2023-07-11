import { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Text } from "native-base";
import Login from "./App/Login";
import TodoList from "./App/TodoList";
import { auth } from "./App/fbConfig";

export default function App() {
  const [user, setUser] = useState({uid: "Cczk7xKhkdZGZCEoBUjFDJl7UkC2"})

  // useEffect(() => {
  //   const _user = auth.currentUser;
  //   setUser(_user);
  // },[])

  return (
    <NativeBaseProvider>
      <Box bg="darkBlue.900" alignItems="center" justifyContent='center' flex={1}>
        <Text color="darkBlue.400" fontSize='4xl'> Checkov Todo </Text>
        {!user
          ? <Login setUser={setUser} />
          : <TodoList user={user}/>
        }
      </Box>
    </NativeBaseProvider>
  );
}

