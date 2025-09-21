import Header from "../components/header/Header"
import { Box, Typography } from "@mui/material"
import TodoList from "../components/list/TodoList"
import { useTodos } from "../hooks/useTodos"

const HomePage: React.FC = () => {
    const {
    todos,
    activeTodosCount,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
  } = useTodos();
  
    return (
        <Box display={'flex'} flexDirection={'column'} gap={3}>
            <Header onAddTodo={addTodo} filter={filter} onFilterChange={setFilter}/>
            <Box display={'flex'} justifyContent={'start'}>
                <Typography variant="h6">Активных задач - {activeTodosCount}</Typography>
            </Box>
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onEdit={editTodo}
                onDelete={deleteTodo}
            />
        </Box>
    )
}

export default HomePage