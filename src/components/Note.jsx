import React, { useState } from "react";
import "./Note.css";
import PropType from 'prop-types'

function Note(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  const [editMode, setEditMode] = useState(false);
    
  let titleContent = React.createRef();
  let bodyContent = React.createRef();
  
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setTitle(titleContent.current.value);
    setBody(bodyContent.current.value);
    setEditMode(false);
  };

  const handleDelete = () => {
      props.handleDelete(props.id);
  }

  let titleElement, bodyElement, buttonArea;
  if (editMode) {
    titleElement = (
      <textarea ref={titleContent} className="title-textarea" defaultValue={title}></textarea>
    );
    bodyElement = (
      <textarea ref={bodyContent} className="body-textarea" defaultValue={body}></textarea>
    );
    buttonArea = (
      <div>
        <button className="btn btn-primary" onClick={handleSave}>Save</button>
      </div>
    );
  } else {
    titleElement = <h5 className="card-title">{title}</h5>;
    bodyElement = <p>{body}</p>;
    buttonArea = (
      <div>
        <button className="btn btn-info" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    );
  }
  return (
    <div className="col-sm-6">
      <div className="card card-view">
        <div className="card-body">
          {titleElement}
          {bodyElement}
          {buttonArea}
        </div>
      </div>
    </div>
  );
}

Note.defaultProps = {
    title: "Title",
    body: "Your content"
}

Note.propType = {
    title: PropType.string
}

export default Note;
