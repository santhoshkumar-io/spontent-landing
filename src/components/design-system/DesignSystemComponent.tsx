//Modules
import React from "react";

// Components
import DesignSystemHeader from "./DesignSystemHeader";

const DesignSystemComponent = (props: any) => {
  return (
    <>
      <DesignSystemHeader title={props.title}/>
      {props.content}
    </>
  );
};

export default DesignSystemComponent;
