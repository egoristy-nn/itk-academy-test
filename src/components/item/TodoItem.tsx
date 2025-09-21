import Box from "@mui/material/Box"
import styles from './ToDoItem.module.css'
import { Checkbox, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

const TodoItem = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    }

    return (
        <Box className={styles.item}>
            <Checkbox 
                checked={checked}
                onChange={handleChange}
            />
            <Box className={styles.text}>
                <Typography variant="body1">Сделать тестовое задание к четвергу</Typography>
            </Box>
            <Box className={styles.icons}>
                <IconButton aria-label="edit">
                    <ModeEditOutlineIcon />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TodoItem