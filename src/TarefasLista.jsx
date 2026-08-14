import TarefasItem from "./TarefasItem";

const TarefasLista = ({tarefas, onEditTarefa, onDeleteTarefa}) => {

  return (
    <ul>
        {tarefas.map((tarefa) => (
            <TarefasItem key={tarefa.id} tarefa={tarefa} onEdit={onEditTarefa} onDelete={onDeleteTarefa} />
        ))}
    </ul>
  )
}

export default TarefasLista;