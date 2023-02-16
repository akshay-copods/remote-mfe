import { Card } from "antd";
import "../index.css";
import "./counterOne.css";
// @ts-ignore
import useStore from "container/store";

const Counter = () => {
  const { user, isLoggedIn } = useStore();

  if (true) {
    return (
      <Card
        className="card"
        title="Sign up"
        bordered={false}
        style={{ width: 300 }}
      >
        {isLoggedIn ? user.name + "is logged in" : "Not logged in"}
      </Card>
    );
  }
};

export default Counter;
