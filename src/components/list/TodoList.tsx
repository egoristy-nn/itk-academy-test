import TodoItem from '../item/ToDoItem'
import styles from './ToDoList.module.css'
import { Box } from "@mui/material"

const TodoList = () => {
    return (
        <Box className={styles.list}>
            <TodoItem />
        </Box>
    )
}

export default TodoList