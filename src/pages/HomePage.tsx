import Header from "../components/header/Header"
import { Box } from "@mui/material"
import TodoList from "../components/list/ToDoList"

const HomePage = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={2}>
            <Header />
            Активных задач - 0
            <TodoList />
        </Box>
    )
}

export default HomePage