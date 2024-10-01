import React from "react";

interface MyComponentProps {
  test: number;
}

export function MyComponent(props: MyComponentProps): React.JSX.Element {
  const { test } = props;

  return <>MyComponent {test}</>;
}
