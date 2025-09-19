
import styles from './Header.module.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, type SelectChangeEvent } from "@mui/material"
import '@fontsource/roboto/500.css';
import { useState } from 'react';

const Header = () => {
    const [option, setOption] = useState<number>(10);

    const handleChange = (event: SelectChangeEvent<number>) => {
        setOption(Number(event.target.value));
    };

    return (
        <Box className={styles.header}>
            <Typography variant="h4">Список дел</Typography>
            <Box className={styles.input}>
                <TextField
                    size='small'
                    label="Введите задачу"
                    multiline
                    maxRows={2}
                    variant="standard"
                    sx={{ width: '30vh' }}
                    />
                <Button variant="outlined">Добавить</Button>
            </Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Фильтр по</InputLabel>
                <Select
                    size='small'
                    sx={{ width: '15vh' , textAlign: 'left' }}
                    value={option}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Все</MenuItem>
                    <MenuItem value={20}>Активные</MenuItem>
                    <MenuItem value={30}>Выполненные</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Header