import React from 'react';

function NodeObjectTmpl(props) {
  return (
    <div
      className={`${props.pointed ? 'node pointed' : 'node'}`}
      onClick={props.toggleEdit} style={{width: props.node.width, marginLeft: props.node.parentWidth - 100}}
    >
      {props.isEdit ? (
        <textarea
          type="text"
          name="text"
          value={props.text}
          onChange={props.handleChange}
          ref={props.textEdit}
          onClick={ev => {
            ev.stopPropagation();
          }}
        ></textarea>
      ) : (
        <span>{props.text}</span>
      )}
      <div
        className={`${
          props.isEdit ? 'functionButtons visible' : 'functionButtons'
        }`}
      >
        <button onClick={props.addNode}>Add </button>
        <button
          onClick={props.deleteNode}
          disabled={props.node.id === undefined}
        >
          Delete{' '}
        </button>
        <button onClick={props.cutNode} disabled={props.node.id === undefined}>
          Cut
        </button>
        <button
          onClick={props.pasteNode}
          disabled={props.pasteOption.children === undefined}
        >
          Paste
        </button>
        <button onClick={props.point}>Make Point</button>
        <button onClick={props.collapse}>Collapse</button>
      </div>
      <div className="expander" onClick={props.collapse}></div>
    </div>
  );
}

export default NodeObjectTmpl;
