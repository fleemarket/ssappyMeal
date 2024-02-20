import MealBody from "@/components/MealBody";
import MainHeader from "@/header/MainHeader";
import { MainLayout } from "@/layout/MainLayout";

export default function MainPage() {

  return (
    <MainLayout variants="horizon">
      <MainHeader />
      <MealBody />
    </MainLayout>
  )
}