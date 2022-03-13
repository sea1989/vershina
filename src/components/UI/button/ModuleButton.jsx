import React from 'react';
import classes from './ModuleButton.module.css';

const ModuleButton = ({ children, ...props }) => {
  return <button className={classes.myBtn}>{children}</button>;
};

export default ModuleButton;
