export interface MyComponentProps {
  title: string;
  list?: string[];
}

const MyComponentContainer = (props: MyComponentProps) => {
  const { title, list } = props;
  return (
    <div className="my-component-container">
      <h3>{title}</h3>
    </div>
  );
};

export default MyComponentContainer;
