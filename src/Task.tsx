import React from 'react';

interface TaskProps extends React.PropsWithChildren{
  message: string;
  delete: React.MouseEventHandler;
}

const Task: React.FC<TaskProps>  = (props) => {
  return (
    <div className="taskBlock">
        <p>{props.message}</p>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
};

export default Task;