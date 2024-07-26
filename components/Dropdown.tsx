export type DropdownProps = {
  options: readonly ([string, string] | string)[]; // we want an array of things that are either tuples of pairs of strings or a single string
  name: string;
}

export function Dropdown(props: DropdownProps) {
  const optionsArray = props.options.map(item => {
    let value: string;
    let name: string;
    if (typeof item === "string") {
      value = item;
      name = item;
    }
    else {
      value = item[0];
      name = item[1];
    }
    return <option value={value}>{name}</option>;
  });
  return (
    <select name={props.name}>
      {optionsArray}
    </select>
  );
}