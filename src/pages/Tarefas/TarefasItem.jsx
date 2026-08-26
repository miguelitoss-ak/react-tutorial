import { useState } from "react";

const TarefasItem = ({tarefa , onEdit, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [novoTexto, setNovoTexto] = useState(tarefa.texto);

  const handleEdit = () => {
    if (isEditing) {
      if (novoTexto.trim()) {
        onEdit(tarefa.id, novoTexto.trim());
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }

  const handleDelete = () => {
    onDelete(tarefa.id);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" value={novoTexto} onChange={(e) => setNovoTexto(e.target.value)} onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleEdit();
            }
          }}/>
          <button onClick={() => {onEdit(tarefa.id, novoTexto); setIsEditing(false);}}>💾</button>
        </>
      ) : (
        <>
          {tarefa.texto}
          <button onClick={handleEdit}>✍️</button>
          <button onClick={handleDelete}>❌</button>
        </>
      )}
    </li>
  );
}
export default TarefasItem;