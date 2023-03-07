import Form from "../components/Form";
import List from "../components/List";
import Style  from  './App.module.scss';
const  App =() => {
  return (
    <div  className={Style.AppStyle}>
      <List></List>
      <Form></Form>
    </div>
  );
}

export default App;
