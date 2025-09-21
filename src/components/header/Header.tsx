
import styles from './Header.module.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, type SelectChangeEvent } from "@mui/material"
import '@fontsource/roboto/500.css';
import { useState } from 'react';
import type { FilterOption } from '../../types/todo';

interface HeaderProps {
    filter: FilterOption;
    onAddTodo: (text: string) => void;
    onFilterChange: (filter: FilterOption) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTodo , filter, onFilterChange}) => {
    const [option, setOption] = useState<FilterOption>(filter);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue('');
    }
  };

    const handleChange = (event: SelectChangeEvent<FilterOption>) => {
        setOption(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <Box className={styles.header}>
            <Typography variant="h4">Список задач</Typography>
            <Box className={styles.input} component='form' onSubmit={handleSubmit}>
                <TextField
                    size='small'
                    label="Введите задачу"
                    multiline
                    maxRows={2}
                    variant="standard"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                    sx={{ width: '30vh' }}
                    />
                <Button type="submit" variant="outlined">Добавить</Button>
            </Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Фильтр по</InputLabel>
                <Select
                    size='small'
                    sx={{ width: '15vh' , textAlign: 'left' }}
                    value={option}
                    onChange={handleChange}
                >
                    <MenuItem value={'all'}>Все</MenuItem>
                    <MenuItem value={'active'}>Активные</MenuItem>
                    <MenuItem value={'completed'}>Выполненные</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Header