import MainPage from "@/pages/main-page";
import MainLayout from '@/widgets/main-layout';

export const routeName = 'MainPage'

export const route = {
  name: routeName,
  path: '/',
  component: MainPage,
  meta: {
    layout: MainLayout,
    title: 'Main Page'
  }
}