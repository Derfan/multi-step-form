import { Layout } from "../../components/Layout";
import cn from "./App.module.sass";

export const App = () => (
  <Layout>
    <div className={cn.steps}>steps</div>
    <div className={cn.card}>Card Component</div>
    <div className={cn.buttons}>Buttons</div>
  </Layout>
);
