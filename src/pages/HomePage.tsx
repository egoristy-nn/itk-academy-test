import Header from "../components/header/Header"
import { Box, Typography } from "@mui/material"
import TodoList from "../components/list/TodoList"

const HomePage = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Header />
            <Box display={'flex'} justifyContent={'start'}>
                <Typography variant="h6">Активных задач - 0</Typography>
            </Box>
            <TodoList />
        </Box>
    )
}

export default HomePage