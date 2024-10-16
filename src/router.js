import { createWebHistory, createRouter } from "vue-router";
import OutdoorMap from "./views/OutdoorMap.vue";
import RoomMap from "./views/RoomMap.vue";
import ShopView from "./views/ShopView.vue";
import DailyView from "./views/DailyView.vue";
import AlltaskView from "./views/AlltaskView.vue";
import IndexView from "./views/IndexView.vue";
import DecorationView from "./views/DecorationView.vue";
import DressView from "./views/DressView.vue";
import ReportView from "./views/ReportView.vue";
import SystemView from "./views/SystemView.vue";
import ForgetPassword from "./components/ForgetPasswordComponent.vue";

const routes = [
  {
    path: "/",
    component: IndexView,
    name: "index",
    children: [
      {
        path: "forgetpassword",
        component: ForgetPassword,
        name: "forgetpassword",
      },
    ],
  },
  {
    path: "/outdoor",
    component: OutdoorMap,
    name: "outdoor",
    children: [
      {
        path: "shop",
        component: ShopView,
        name: "out-shop",
      },
      {
        path: "daily",
        component: DailyView,
        name: "out-daily",
      },
      {
        path: "task",
        component: AlltaskView,
        name: "out-task",
      },
      {
        path: "dress",
        component: DressView,
        name: "out-dress",
      },
      {
        path: "decoration",
        component: DecorationView,
        name: "out-decoration",
      },
      {
        path: "system",
        component: SystemView,
        name: "out-system",
      },
      {
        path: "report",
        component: ReportView,
        name: "out-report",
      },
    ],
  },
  {
    path: "/roommap",
    component: RoomMap,
    name: "roommap",
    children: [
      {
        path: "shop",
        component: ShopView,
        name: "in-shop",
      },
      {
        path: "daily",
        component: DailyView,
        name: "in-daily",
      },
      {
        path: "task",
        component: AlltaskView,
        name: "in-task",
      },
      {
        path: "dress",
        component: DressView,
        name: "in-dress",
      },
      {
        path: "decoration",
        component: DecorationView,
        name: "in-decoration",
      },
      {
        path: "system",
        component: SystemView,
        name: "in-system",
      },
      {
        path: "report",
        component: ReportView,
        name: "in-report",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
