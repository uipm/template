import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import FeaturesPage from "../pages/FeaturesPage.vue";
import OurTeamPage from "../pages/OurTeamPage.vue";
import FAQPage from "../pages/FAQPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import SignInPage from "../pages/Authentication/SignInPage.vue";
import SignUpPage from "../pages/Authentication/SignUpPage.vue";
import ResetPasswordPage from "../pages/Authentication/ResetPasswordPage.vue";
import ForgotPasswordPage from "../pages/Authentication/ForgotPasswordPage.vue";
import LogoutPage from "../pages/Authentication/LogoutPage.vue";
import EcommercePage from "../pages/Dashboard/EcommercePage.vue";
import CRMPage from "../pages/Dashboard/CRMPage.vue";
import ProjectManagementPage from "../pages/Dashboard/ProjectManagementPage.vue";
import LMSPage from "../pages/Dashboard/LMSPage.vue";
import HelpDeskPage from "../pages/Dashboard/HelpDeskPage.vue";
import AnalyticsPage from "../pages/Dashboard/AnalyticsPage.vue";
import CryptoPage from "../pages/Dashboard/CryptoPage.vue";
import SalesPage from "../pages/Dashboard/SalesPage.vue";
import HospitalPage from "../pages/Dashboard/HospitalPage.vue";
import ToDoListPage from "../pages/Apps/ToDoListPage.vue";
import CalendarPage from "../pages/Apps/CalendarPage.vue";
import ContactsPage from "../pages/Apps/ContactsPage.vue";
import ChatPage from "../pages/Apps/ChatPage.vue";
import InboxPage from "../pages/Apps/InboxPage.vue";
import ComposePage from "../pages/Apps/ComposePage.vue";
import ReadEmailPage from "../pages/Apps/ReadEmailPage.vue";
import KanbanBoardPage from "../pages/Apps/KanbanBoardPage.vue";
import MyDrivePage from "../pages/Apps/MyDrivePage.vue";
import AssetsPage from "../pages/Apps/AssetsPage.vue";
import ProjectsPage from "../pages/Apps/ProjectsPage.vue";
import PersonalPage from "../pages/Apps/PersonalPage.vue";
import ApplicationsPage from "../pages/Apps/ApplicationsPage.vue";
import DocumentsPage from "../pages/Apps/DocumentsPage.vue";
import MediaPage from "../pages/Apps/MediaPage.vue";
import RecantsPage from "../pages/Apps/RecantsPage.vue";
import ImportantFilesPage from "../pages/Apps/ImportantFilesPage.vue";
import ProductsGridPage from "../pages/Ecommerce/ProductsGridPage.vue";
import ProductsListPage from "../pages/Ecommerce/ProductsListPage.vue";
import ProductDetailsPage from "../pages/Ecommerce/ProductDetailsPage.vue";
import CreateProductPage from "../pages/Ecommerce/CreateProductPage.vue";
import EditProductPage from "../pages/Ecommerce/EditProductPage.vue";
import CartPage from "../pages/Ecommerce/CartPage.vue";
import CheckoutPage from "../pages/Ecommerce/CheckoutPage.vue";
import OrdersPage from "../pages/Ecommerce/OrdersPage.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/features",
        name: "FeaturesPage",
        component: FeaturesPage,
    },
    {
        path: "/team",
        name: "OurTeamPage",
        component: OurTeamPage,
    },
    {
        path: "/faq",
        name: "FAQPage",
        component: FAQPage,
    },
    {
        path: "/contact",
        name: "ContactPage",
        component: ContactPage,
    },
    {
        path: "/authentication/sign-in",
        name: "SignInPage",
        component: SignInPage,
    },
    {
        path: "/authentication/sign-up",
        name: "SignUpPage",
        component: SignUpPage,
    },
    {
        path: "/authentication/reset-password",
        name: "ResetPasswordPage",
        component: ResetPasswordPage,
    },
    {
        path: "/authentication/forgot-password",
        name: "ForgotPasswordPage",
        component: ForgotPasswordPage,
    },
    {
        path: "/authentication/logout",
        name: "LogoutPage",
        component: LogoutPage,
    },
    {
        path: "/dashboard",
        name: "EcommercePage",
        component: EcommercePage,
    },
    {
        path: "/dashboard/crm",
        name: "CRMPage",
        component: CRMPage,
    },
    {
        path: "/dashboard/project-management",
        name: "ProjectManagementPage",
        component: ProjectManagementPage,
    },
    {
        path: "/dashboard/lms",
        name: "LMSPage",
        component: LMSPage,
    },
    {
        path: "/dashboard/help-desk",
        name: "HelpDeskPage",
        component: HelpDeskPage,
    },
    {
        path: "/dashboard/analytics",
        name: "AnalyticsPage",
        component: AnalyticsPage,
    },
    {
        path: "/dashboard/crypto",
        name: "CryptoPage",
        component: CryptoPage,
    },
    {
        path: "/dashboard/sales",
        name: "SalesPage",
        component: SalesPage,
    },
    {
        path: "/dashboard/hospital",
        name: "HospitalPage",
        component: HospitalPage,
    },
    {
        path: "/apps/to-do-list",
        name: "ToDoListPage",
        component: ToDoListPage,
    },
    {
        path: "/apps/calendar",
        name: "CalendarPage",
        component: CalendarPage,
    },
    {
        path: "/apps/contacts",
        name: "ContactsPage",
        component: ContactsPage,
    },
    {
        path: "/apps/chat",
        name: "ChatPage",
        component: ChatPage,
    },
    {
        path: "/apps/email/inbox",
        name: "InboxPage",
        component: InboxPage,
    },
    {
        path: "/apps/email/compose",
        name: "ComposePage",
        component: ComposePage,
    },
    {
        path: "/apps/email/read",
        name: "ReadEmailPage",
        component: ReadEmailPage,
    },
    {
        path: "/apps/kanban-board",
        name: "KanbanBoardPage",
        component: KanbanBoardPage,
    },
    {
        path: "/apps/file-manager/my-drive",
        name: "MyDrivePage",
        component: MyDrivePage,
    },
    {
        path: "/apps/file-manager/assets",
        name: "AssetsPage",
        component: AssetsPage,
    },
    {
        path: "/apps/file-manager/projects",
        name: "ProjectsPage",
        component: ProjectsPage,
    },
    {
        path: "/apps/file-manager/personal",
        name: "PersonalPage",
        component: PersonalPage,
    },
    {
        path: "/apps/file-manager/applications",
        name: "ApplicationsPage",
        component: ApplicationsPage,
    },
    {
        path: "/apps/file-manager/documents",
        name: "DocumentsPage",
        component: DocumentsPage,
    },
    {
        path: "/apps/file-manager/media",
        name: "MediaPage",
        component: MediaPage,
    },
    {
        path: "/apps/file-manager/recents",
        name: "RecantsPage",
        component: RecantsPage,
    },
    {
        path: "/apps/file-manager/important",
        name: "ImportantFilesPage",
        component: ImportantFilesPage,
    },
    {
        path: "/ecommerce/products-grid",
        name: "ProductsGridPage",
        component: ProductsGridPage,
    },
    {
        path: "/ecommerce/products-list",
        name: "ProductsListPage",
        component: ProductsListPage,
    },
    {
        path: "/ecommerce/product-details",
        name: "ProductDetailsPage",
        component: ProductDetailsPage,
    },
    {
        path: "/ecommerce/create-product",
        name: "CreateProductPage",
        component: CreateProductPage,
    },

    {
        path: "/ecommerce/edit-product",
        name: "EditProductPage",
        component: EditProductPage,
    },
    {
        path: "/ecommerce/cart",
        name: "CartPage",
        component: CartPage,
    },
    {
        path: "/ecommerce/checkout",
        name: "CheckoutPage",
        component: CheckoutPage,
    },
    {
        path: "/ecommerce/orders",
        name: "OrdersPage",
        component: OrdersPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "active",
    scrollBehavior() {
        return { top: 0, behavior: "smooth" };
    },
});

export default router;
