import MyComponent from "./MyComponent";

export interface MyComponentProps {
  title: string;
  list?: string[];
}

const MyComponentContainer = (props: MyComponentProps) => {
  const { title, list } = props;
  return (
    <div className="my-component-container">
      <h3>{title}</h3>
      <MyComponent />
    </div>
  );
};

export default MyComponentContainer;
