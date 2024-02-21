import MealBody from "@/components/MealBody";
import MainHeader from "@/header/MainHeader";
import { MainLayout } from "@/layout/MainLayout";

const which_day = new Date().getDay()

export default function MainPage() {

  return (
    <MainLayout variants="horizon">
      <MainHeader day={which_day} />
      <MealBody />
    </MainLayout>
  )
}