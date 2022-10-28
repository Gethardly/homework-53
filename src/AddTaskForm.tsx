import React from 'react';

interface AddTaskFormProps extends React.PropsWithChildren {
  addTaskBtn: React.MouseEventHandler;
  textFromUser: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<AddTaskFormProps> = (props) => {
  return (
    <div className="taskForm">
      <p>
        <input placeholder={'Add new task'} onChange={props.textFromUser}/>
      </p>
      <button onClick={props.addTaskBtn}>Add</button>
    </div>
  );
};

export default AddTaskForm;