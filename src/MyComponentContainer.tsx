import MyComponent from "./MyComponent";
import { MyComponentProps } from "./appTypes";

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
