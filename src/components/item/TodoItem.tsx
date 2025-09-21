import Box from "@mui/material/Box"
import { Checkbox, IconButton, TextField, Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    completed: boolean;
  };
  onToggle: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'start'}
        padding={2}
        border={1}
        borderColor={'divider'}
        borderRadius={2}
        bgcolor={todo.completed ? 'action.hover' : 'background.paper'}
    >
      <Tooltip title={todo.completed ? 'Отметить как не выполненную' : 'Отметить как выполненную'}>
        <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)} />
      </Tooltip>
      
      {isEditing ? (
        <>
          <TextField
            fullWidth
            variant="standard"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEdit();
            }}
          />
          <IconButton onClick={handleEdit} color="primary">
            <CheckIcon />
          </IconButton>
          <IconButton onClick={handleCancel} color="error">
            <CloseIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            variant="body1"
            sx={{
              flexGrow: 1,
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'text.secondary' : 'text.primary'
            }}
          >
            {todo.text}
          </Typography>
          <Tooltip title="Редактировать">
            <IconButton onClick={() => setIsEditing(true)} disabled={todo.completed}>
                <ModeEditOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Удалить">
            <IconButton onClick={() => onDelete(todo.id)}>
                <DeleteIcon color="error"/>
            </IconButton>
          </Tooltip>
        </>
      )}
    </Box>
  );
};

export default TodoItem;