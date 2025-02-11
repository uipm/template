import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSidebar from "./components/Layout/LeftSidebar";
import Footer from "./components/Layout/Footer";
import TopNavbar from "./components/Layout/TopNavbar";
import ControlPanel from "./components/Layout/ControlPanel";
import ScrollToTop from "./components/Layout/ScrollToTop";

// Front Pages
import Home from "./pages/Home";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

// Dashboard
import Ecommerce from "./pages/dashboard/Ecommerce";
import CRM from "./pages/dashboard/CRM";
import ProjectManagement from "./pages/dashboard/ProjectManagement";
import LMS from "./pages/dashboard/LMS";
import HelpDesk from "./pages/dashboard/HelpDesk";
import Analytics from "./pages/dashboard/Analytics";
import Crypto from "./pages/dashboard/Crypto";
import Sales from "./pages/dashboard/Sales";
import Hospital from "./pages/dashboard/Hospital";
import Marketing from "./pages/dashboard/Marketing";
import NFT from "./pages/dashboard/NFT";
import Saas from "./pages/dashboard/Saas";
import RealEstate from "./pages/dashboard/RealEstate";
import Shipment from "./pages/dashboard/Shipment";
import Finance from "./pages/dashboard/Finance";
import HRM from "./pages/dashboard/HRM";
import School from "./pages/dashboard/School";
import CallCenter from "./pages/dashboard/CallCenter";

// Apps
import ToDoList from "./pages/apps/ToDoList";
import Calendar from "./pages/apps/Calendar";
import Contacts from "./pages/apps/Contacts";
import Chat from "./pages/apps/Chat";
import Email from "./pages/apps/email/Email";
import Compose from "./pages/apps/email/Compose";
import Read from "./pages/apps/email/Read";
import Starred from "./pages/apps/email/Starred";
import Snoozed from "./pages/apps/email/Snoozed";
import SentMail from "./pages/apps/email/SentMail";
import Draft from "./pages/apps/email/Draft";
import Important from "./pages/apps/email/Important";
import KanbanBoard from "./pages/apps/KanbanBoard";

// Apps -> File Manager
import FileManager from "./pages/apps/FileManager";
import Assets from "./pages/apps/FileManager/Assets";
import Projects from "./pages/apps/FileManager/Projects";
import Personal from "./pages/apps/FileManager/Personal";
import Applications from "./pages/apps/FileManager/Applications";
import Documents from "./pages/apps/FileManager/Documents";
import Media from "./pages/apps/FileManager/Media";
import Recents from "./pages/apps/FileManager/Recents";
import ImportantFile from "./pages/apps/FileManager/ImportantFile";
import Spam from "./pages/apps/FileManager/Spam";
import Trash from "./pages/apps/FileManager/Trash";

// eCommerce
import ProductsGrid from "./pages/ecommerce/ProductsGrid";
import ProductsList from "./pages/ecommerce/ProductsList";
import ProductsDetails from "./pages/ecommerce/ProductsDetails";
import CreateProduct from "./pages/ecommerce/CreateProduct";
import EditProduct from "./pages/ecommerce/EditProduct";
import Cart from "./pages/ecommerce/Cart";
import Checkout from "./pages/ecommerce/Checkout";
import Orders from "./pages/ecommerce/Orders";
import OrderDetails from "./pages/ecommerce/Orders/OrderDetails";
import CreateOrder from "./pages/ecommerce/Orders/CreateOrder";
import Tracking from "./pages/ecommerce/Orders/Tracking";
import Customers from "./pages/ecommerce/Customers";
import CustomersDetails from "./pages/ecommerce/Customers/CustomersDetails";
import Categories from "./pages/ecommerce/Categories";
import Sellers from "./pages/ecommerce/Sellers";
import SellersDetails from "./pages/ecommerce/Sellers/SellersDetails";
import CreateSeller from "./pages/ecommerce/Sellers/CreateSeller";
import Reviews from "./pages/ecommerce/Reviews";
import Refunds from "./pages/ecommerce/Refunds";

// CRM
import CrmContacts from "./pages/crm/CrmContacts";
import CrmCustomers from "./pages/crm/CrmCustomers";
import CrmLeads from "./pages/crm/CrmLeads";
import CrmDeals from "./pages/crm/CrmDeals";

// Project Management
import ProjectOverview from "./pages/project-management/ProjectOverview";
import ProjectsList from "./pages/project-management/ProjectsList";
import CreateProject from "./pages/project-management/CreateProject";
import Clients from "./pages/project-management/Clients";
import Teams from "./pages/project-management/Teams";
import PmKanbanBoard from "./pages/project-management/PmKanbanBoard";
import PmUsers from "./pages/project-management/PmUsers";

// LMS
import Courses from "./pages/lms/Courses";
import CoursesDetails from "./pages/lms/CoursesDetails";
import LessonPreview from "./pages/lms/LessonPreview";
import CreateCourse from "./pages/lms/CreateCourse";
import EditCourse from "./pages/lms/EditCourse";
import Instructors from "./pages/lms/Instructors";

// Helpdesk
import Tickets from "./pages/helpdesk/Tickets";
import TicketsDetails from "./pages/helpdesk/Tickets/TicketsDetails";
import Agents from "./pages/helpdesk/Agents";
import Reports from "./pages/helpdesk/Reports";

// NFT
import Marketplace from "./pages/nft/Marketplace";
import ExploreAll from "./pages/nft/ExploreAll";
import LiveAuction from "./pages/nft/LiveAuction";
import NftDetails from "./pages/nft/NftDetails";
import NftCreators from "./pages/nft/NftCreators";
import NftCreatorDetails from "./pages/nft/NftCreatorDetails";
import WalletConnect from "./pages/nft/WalletConnect";
import CreateNft from "./pages/nft/CreateNft";

// Real Estate
import PropertyList from "./pages/real-estate/PropertyList";
import PropertyDetails from "./pages/real-estate/PropertyDetails";
import AddProperty from "./pages/real-estate/AddProperty";
import ReAgents from "./pages/real-estate/ReAgents";
import ReAgentsDetails from "./pages/real-estate/ReAgentsDetails";
import AddAgents from "./pages/real-estate/AddAgents";
import ReCustomers from "./pages/real-estate/ReCustomers";

// Finance
import Wallet from "./pages/finance/Wallet";
import Transactions from "./pages/finance/Transactions";

// Events
import Events from "./pages/events";
import EventsList from "./pages/events/EventsList";
import EventsDetails from "./pages/events/EventsDetails";
import CreateAnEvent from "./pages/events/CreateAnEvent";
import EditAnEvent from "./pages/events/EditAnEvent";

// Social
import SProfile from "./pages/social/SProfile";
import SosialProfileSettings from "./pages/social/SosialProfileSettings";

// Invoices
import Invoices from "./pages/invoices";
import InvoicesDetails from "./pages/invoices/InvoicesDetails";
import CreateInvoice from "./pages/invoices/CreateInvoice";
import EditInvoice from "./pages/invoices/EditInvoice";

// Users
import Users from "./pages/users";
import UsersList from "./pages/users/UsersList";
import AddUsers from "./pages/users/AddUsers";

// Profile
import UserProfile from "./pages/profile/UserProfile";
import TeamsProfile from "./pages/profile/TeamsProfile";
import MyProjects from "./pages/profile/MyProjects";

import Starter from "./pages/Starter";

// Icons
import MaterialSymbols from "./pages/icons/MaterialSymbols";
import Remixicon from "./pages/icons/Remixicon";

// ui-kit
import Accordion from "./pages/ui-kit/Accordion";
import Alerts from "./pages/ui-kit/Alerts";
import Avatar from "./pages/ui-kit/Avatar";
import Badges from "./pages/ui-kit/Badges";
import Buttons from "./pages/ui-kit/Buttons";
import Cards from "./pages/ui-kit/Cards";
import Carousel from "./pages/ui-kit/Carousel";
import DateTimePicker from "./pages/ui-kit/DateTimePicker";
import Dropdowns from "./pages/ui-kit/Dropdowns";
import Images from "./pages/ui-kit/Images";
import ListGroups from "./pages/ui-kit/ListGroups";
import Navbars from "./pages/ui-kit/Navbars";
import Navs from "./pages/ui-kit/Navs";
import ProgressBars from "./pages/ui-kit/ProgressBars";
import Videos from "./pages/ui-kit/Videos";

// Tables
import BasicTables from "./pages/tables/BasicTables";
import DataTables from "./pages/tables/DataTables";

// Forms
import BasicElements from "./pages/forms/BasicElements";
import AdvancedElements from "./pages/forms/AdvancedElements";
import Validation from "./pages/forms/Validation";
import Editors from "./pages/forms/Editors";
import FileUploader from "./pages/forms/FileUploader";

// Charts
import Line from "./pages/charts/Line";
import Area from "./pages/charts/Area";
import Column from "./pages/charts/Column";
import Mixed from "./pages/charts/Mixed";
import Radialbar from "./pages/charts/Radialbar";
import Radar from "./pages/charts/Radar";
import Pie from "./pages/charts/Pie";
import Polar from "./pages/charts/Polar";
import More from "./pages/charts/More";

// Authentication
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";
import ConfirmEmail from "./pages/authentication/ConfirmEmail";
import LockScreen from "./pages/authentication/LockScreen";
import Logout from "./pages/authentication/Logout";

// Extra Pages
import PricingPlan from "./pages/PricingPlan";
import Animation from "./pages/Animation";
import Ratings from "./pages/Ratings";
import Toasts from "./pages/Toasts";
import Timeline from "./pages/Timeline";
import ExtraFaq from "./pages/ExtraFaq";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Search from "./pages/Search";
import BlankPage from "./pages/BlankPage";
import NotFound from "./pages/NotFound";
import InternalError from "./pages/InternalError";

import Widgets from "./pages/Widgets";
import Maps from "./pages/Maps";
import Notifications from "./pages/Notifications";
import Members from "./pages/Members";
import MyProfile from "./pages/MyProfile";

// Settings
import AccountSettings from "./pages/settings/AccountSettings";
import ChangePassword from "./pages/settings/ChangePassword";
import Connections from "./pages/settings/Connections";
import PrivacyPolicy from "./pages/settings/PrivacyPolicy";
import TermsConditions from "./pages/settings/TermsConditions";

const App = () => {
  const [active, setActive] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname); // Get the current path
  }, []);

  const toggleActive = () => {
    setActive(!active);
  };

  const isAuthPage = [
    "/authentication/sign-in",
    "/authentication/sign-up",
    "/authentication/forgot-password",
    "/authentication/reset-password",
    "/authentication/confirm-email",
    "/authentication/lock-screen",
    "/authentication/logout",
    "/not-found",
    "/",
    "/features",
    "/team",
    "/faq",
    "/contact",
  ].includes(pathname);

  return (
    <>
      <div className={`main-wrapper-content ${active ? "active" : ""}`}>
        <Router>
          {!isAuthPage && (
            <>
              <LeftSidebar toggleActive={toggleActive} />
            </>
          )}

          <div className="main-content d-flex flex-column">
            <ScrollToTop />

            {!isAuthPage && (
              <>
                <TopNavbar toggleActive={toggleActive} />
              </>
            )}

            <Routes>
              {/* Front Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/team" element={<Team />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />

              {/* Dashboard */}
              <Route path="/dashboard/ecommerce" element={<Ecommerce />} />
              <Route path="/dashboard/crm" element={<CRM />} />
              <Route
                path="/dashboard/project-management"
                element={<ProjectManagement />}
              />
              <Route path="/dashboard/lms" element={<LMS />} />
              <Route path="/dashboard/helpdesk" element={<HelpDesk />} />
              <Route path="/dashboard/analytics" element={<Analytics />} />
              <Route path="/dashboard/crypto" element={<Crypto />} />
              <Route path="/dashboard/sales" element={<Sales />} />
              <Route path="/dashboard/hospital" element={<Hospital />} />
              <Route path="/dashboard/marketing" element={<Marketing />} />
              <Route path="/dashboard/nft" element={<NFT />} />
              <Route path="/dashboard/saas" element={<Saas />} />
              <Route path="/dashboard/real-estate" element={<RealEstate />} />
              <Route path="/dashboard/shipment" element={<Shipment />} />
              <Route path="/dashboard/finance" element={<Finance />} />
              <Route path="/dashboard/hrm" element={<HRM />} />
              <Route path="/dashboard/school" element={<School />} />
              <Route path="/dashboard/call-center" element={<CallCenter />} />

              {/* Apps */}
              <Route path="/apps/to-do-list" element={<ToDoList />} />
              <Route path="/apps/calendar" element={<Calendar />} />
              <Route path="/apps/contacts" element={<Contacts />} />
              <Route path="/apps/chat" element={<Chat />} />
              <Route path="/apps/email/inbox" element={<Email />} />
              <Route path="/apps/email/compose" element={<Compose />} />
              <Route path="/apps/email/read-email" element={<Read />} />
              <Route path="/apps/email/starred" element={<Starred />} />
              <Route path="/apps/email/snoozed" element={<Snoozed />} />
              <Route path="/apps/email/sent-mail" element={<SentMail />} />
              <Route path="/apps/email/draft" element={<Draft />} />
              <Route path="/apps/email/important" element={<Important />} />
              <Route path="/apps/kanban-board" element={<KanbanBoard />} />

              {/* Apps -> File Manager */}
              <Route path="/apps/file-manager" element={<FileManager />} />
              <Route path="/apps/file-manager/assets" element={<Assets />} />
              <Route
                path="/apps/file-manager/projects"
                element={<Projects />}
              />
              <Route
                path="/apps/file-manager/personal"
                element={<Personal />}
              />
              <Route
                path="/apps/file-manager/applications"
                element={<Applications />}
              />
              <Route
                path="/apps/file-manager/documents"
                element={<Documents />}
              />
              <Route path="/apps/file-manager/media" element={<Media />} />
              <Route path="/apps/file-manager/recents" element={<Recents />} />
              <Route
                path="/apps/file-manager/important"
                element={<ImportantFile />}
              />
              <Route path="/apps/file-manager/spam" element={<Spam />} />
              <Route path="/apps/file-manager/trash" element={<Trash />} />

              {/* eCommerce */}
              <Route
                path="/ecommerce/products-grid"
                element={<ProductsGrid />}
              />
              <Route
                path="/ecommerce/products-list"
                element={<ProductsList />}
              />

              <Route
                path="/ecommerce/product-details"
                element={<ProductsDetails />}
              />
              <Route
                path="/ecommerce/create-product/"
                element={<CreateProduct />}
              />
              <Route path="/ecommerce/edit-product" element={<EditProduct />} />
              <Route path="/ecommerce/cart" element={<Cart />} />
              <Route path="/ecommerce/checkout" element={<Checkout />} />
              <Route path="/ecommerce/orders" element={<Orders />} />
              <Route
                path="/ecommerce/orders/details"
                element={<OrderDetails />}
              />
              <Route
                path="/ecommerce/orders/create"
                element={<CreateOrder />}
              />
              <Route path="/ecommerce/orders/tracking" element={<Tracking />} />
              <Route path="/ecommerce/customers" element={<Customers />} />
              <Route
                path="/ecommerce/customers/details"
                element={<CustomersDetails />}
              />
              <Route path="/ecommerce/categories" element={<Categories />} />
              <Route path="/ecommerce/sellers" element={<Sellers />} />
              <Route
                path="/ecommerce/sellers/details"
                element={<SellersDetails />}
              />
              <Route
                path="/ecommerce/sellers/create"
                element={<CreateSeller />}
              />
              <Route path="/ecommerce/reviews" element={<Reviews />} />
              <Route path="/ecommerce/refunds" element={<Refunds />} />

              {/* CRM */}
              <Route path="/crm/contacts" element={<CrmContacts />} />
              <Route path="/crm/customers" element={<CrmCustomers />} />
              <Route path="/crm/leads" element={<CrmLeads />} />
              <Route path="/crm/deals" element={<CrmDeals />} />

              {/* Project Management */}
              <Route
                path="/project-management/project-overview"
                element={<ProjectOverview />}
              />
              <Route
                path="/project-management/projects-list"
                element={<ProjectsList />}
              />
              <Route
                path="/project-management/create-project"
                element={<CreateProject />}
              />
              <Route path="/project-management/clients" element={<Clients />} />
              <Route path="/project-management/teams" element={<Teams />} />
              <Route
                path="/project-management/kanban-board"
                element={<PmKanbanBoard />}
              />
              <Route path="/project-management/users" element={<PmUsers />} />

              {/* LMS */}
              <Route path="/lms/courses" element={<Courses />} />
              <Route path="/lms/courses/details" element={<CoursesDetails />} />
              <Route path="/lms/lesson-preview" element={<LessonPreview />} />
              <Route path="/lms/create-course" element={<CreateCourse />} />
              <Route path="/lms/edit-course" element={<EditCourse />} />
              <Route path="/lms/instructors" element={<Instructors />} />

              {/* Helpdesk */}
              <Route path="/helpdesk/tickets" element={<Tickets />} />
              <Route
                path="/helpdesk/tickets/details"
                element={<TicketsDetails />}
              />
              <Route path="/helpdesk/agents" element={<Agents />} />
              <Route path="/helpdesk/reports" element={<Reports />} />

              {/* NFT */}
              <Route path="/nft/marketplace" element={<Marketplace />} />
              <Route path="/nft/explore-all" element={<ExploreAll />} />
              <Route path="/nft/live-auction" element={<LiveAuction />} />
              <Route path="/nft/details" element={<NftDetails />} />
              <Route path="/nft/creators" element={<NftCreators />} />
              <Route
                path="/nft/creators/details"
                element={<NftCreatorDetails />}
              />
              <Route path="/nft/wallet-connect" element={<WalletConnect />} />
              <Route path="/nft/creact" element={<CreateNft />} />

              {/* Real Estate */}
              <Route
                path="/real-estate/property-list"
                element={<PropertyList />}
              />
              <Route
                path="/real-estate/property-details"
                element={<PropertyDetails />}
              />
              <Route
                path="/real-estate/add-property"
                element={<AddProperty />}
              />
              <Route path="/real-estate/agents" element={<ReAgents />} />
              <Route
                path="/real-estate/agent-details"
                element={<ReAgentsDetails />}
              />
              <Route path="/real-estate/add-agent" element={<AddAgents />} />
              <Route path="/real-estate/customers" element={<ReCustomers />} />

              {/* Finance */}
              <Route path="/finance/wallet" element={<Wallet />} />
              <Route path="/finance/transactions" element={<Transactions />} />

              {/* Events */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/events-list" element={<EventsList />} />
              <Route path="/events/details" element={<EventsDetails />} />
              <Route
                path="/events/create-an-event"
                element={<CreateAnEvent />}
              />
              <Route path="/events/edit-an-event" element={<EditAnEvent />} />

              {/* Social */}
              <Route path="/social/profile" element={<SProfile />} />
              <Route
                path="/social/settings"
                element={<SosialProfileSettings />}
              />

              {/* Invoices */}
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/invoices/details" element={<InvoicesDetails />} />
              <Route path="/invoices/create" element={<CreateInvoice />} />
              <Route path="/invoices/edit" element={<EditInvoice />} />

              {/* Users */}
              <Route path="/users" element={<Users />} />
              <Route path="/users/users-list" element={<UsersList />} />
              <Route path="/users/add-user" element={<AddUsers />} />

              {/* Profile */}
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/profile/teams" element={<TeamsProfile />} />
              <Route path="/profile/projects" element={<MyProjects />} />

              <Route path="/starter" element={<Starter />} />

              {/* icons */}
              <Route
                path="/icons/material-symbols"
                element={<MaterialSymbols />}
              />
              <Route path="/icons/remixicon" element={<Remixicon />} />

              {/* ui-kit */}
              <Route path="/ui-kit/accordion" element={<Accordion />} />
              <Route path="/ui-kit/alerts" element={<Alerts />} />
              <Route path="/ui-kit/avatar" element={<Avatar />} />
              <Route path="/ui-kit/badges" element={<Badges />} />
              <Route path="/ui-kit/buttons" element={<Buttons />} />
              <Route path="/ui-kit/cards" element={<Cards />} />
              <Route path="/ui-kit/carousel" element={<Carousel />} />
              <Route
                path="/ui-kit/date-time-picker"
                element={<DateTimePicker />}
              />
              <Route path="/ui-kit/Dropdowns" element={<Dropdowns />} />
              <Route path="/ui-kit/images" element={<Images />} />
              <Route path="/ui-kit/list-groups" element={<ListGroups />} />
              <Route path="/ui-kit/navbars" element={<Navbars />} />
              <Route path="/ui-kit/navs" element={<Navs />} />
              <Route path="/ui-kit/progress-bars" element={<ProgressBars />} />
              <Route path="/ui-kit/videos" element={<Videos />} />

              {/* Tables */}
              <Route path="/tables/basic-table" element={<BasicTables />} />
              <Route path="/tables/data-table" element={<DataTables />} />

              {/* Forms */}
              <Route path="/forms/basic-elements" element={<BasicElements />} />
              <Route
                path="/forms/advanced-elements"
                element={<AdvancedElements />}
              />
              <Route path="/forms/validation" element={<Validation />} />
              <Route path="/forms/editors" element={<Editors />} />
              <Route path="/forms/file-upload" element={<FileUploader />} />

              {/* Charts */}
              <Route path="/charts/line" element={<Line />} />
              <Route path="/charts/area" element={<Area />} />
              <Route path="/charts/column" element={<Column />} />
              <Route path="/charts/mixed" element={<Mixed />} />
              <Route path="/charts/radialbar" element={<Radialbar />} />
              <Route path="/charts/radar" element={<Radar />} />
              <Route path="/charts/pie" element={<Pie />} />
              <Route path="/charts/polar" element={<Polar />} />
              <Route path="/charts/more" element={<More />} />

              {/* Authentication */}
              <Route path="/authentication/sign-in" element={<SignIn />} />
              <Route path="/authentication/sign-up" element={<SignUp />} />
              <Route
                path="/authentication/forgot-password"
                element={<ForgotPassword />}
              />
              <Route
                path="/authentication/reset-password"
                element={<ResetPassword />}
              />
              <Route
                path="/authentication/confirm-email"
                element={<ConfirmEmail />}
              />
              <Route
                path="/authentication/lock-screen"
                element={<LockScreen />}
              />
              <Route path="/authentication/logout" element={<Logout />} />

              {/* Extra Pages */}
              <Route path="/pricing-plan" element={<PricingPlan />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/ratings" element={<Ratings />} />
              <Route path="/toasts" element={<Toasts />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/extra-faq" element={<ExtraFaq />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/search" element={<Search />} />
              <Route path="/blank-page" element={<BlankPage />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/internal-error" element={<InternalError />} />
              <Route path="/widgets" element={<Widgets />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/members" element={<Members />} />
              <Route path="/my-profile" element={<MyProfile />} />

              {/* Settings */}
              <Route
                path="/settings/account-settings"
                element={<AccountSettings />}
              />
              <Route
                path="/settings/change-password"
                element={<ChangePassword />}
              />
              <Route path="/settings/connections" element={<Connections />} />
              <Route
                path="/settings/privacy-policy"
                element={<PrivacyPolicy />}
              />
              <Route
                path="/settings/terms-conditions"
                element={<TermsConditions />}
              />
            </Routes>

            {!isAuthPage && <Footer />}
          </div>
        </Router>
      </div>

      {/* ControlPanel */}
      <ControlPanel />
    </>
  );
};

export default App;
