import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationNavPage from './pages/NavigationNavPage';
import FormsNavPage from './pages/FormsNavPage';
import TablesNavPage from './pages/TablesNavPage';
import AddonsNavPage from './pages/AddonsNavPage';
import ModalsNavPage from './pages/ModalsNavPage';
import AdvancedNavPage from './pages/AdvancedNavPage';
import ComponentsNavPage from './pages/ComponentsNavPage'; 

import HomepageSharda from './sharda/index';
import LearnSharda from './sharda/LearnSharda';

// FREE
import AnimationPage from './pages/AnimationPage';
import AlertPage from './pages/AlertPage';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';
import CSSNavPage from './pages/CSSNavPage';
import TablePage from './pages/TablePage';
import TableResponsivePage from './pages/TableResponsivePage';
import TableScrollPage from './pages/TableScrollPage';
import TableStylesPage from './pages/TableStylesPage';
import BadgePage from './pages/BadgePage';
import BreadcrumbPage from './pages/BreadcrumbPage';
import FaPage from './pages/FaPage';
import DatatablePage from './pages/DatatablePage';
import DatatableApiPage from './pages/DatatableApiPage';
import ModalPage from './pages/ModalPage';
import ModalFormPage from './pages/ModalFormPage';
import ModalExamplesPage from './pages/ModalExamplesPage';
import ProgressPage from './pages/ProgressPage';
import InputPage from './pages/InputPage';
import MediaPage from './pages/MediaPage';
import JumbotronPage from './pages/JumbotronPage';
import CardsPage from './pages/CardsPage';
import PaginationPage from './pages/PaginationPage';
import PopoverPage from './pages/PopoverPage';
import ListGroupPage from './pages/ListGroupPage';
import CarouselPage from './pages/CarouselPage';
import PanelPage from './pages/PanelPage';
import CollapsePage from './pages/CollapsePage';
import TooltipsPage from './pages/TooltipsPage';
import FooterPage from './pages/FooterPage';
import MasksPage from './pages/MasksPage';
import DropdownPage from './pages/DropdownPage';
import VideoCarouselPage from './pages/VideoCarouselPage';
import HoverPage from './pages/HoverPage';
import FormsPage from './pages/FormsPage';
import ChartsPage from './pages/ChartsPage';
import SearchPage from './pages/SearchPage';
import ValidationPage from './pages/ValidationPage';
import NavbarPage from './pages/NavbarPage';
import IframePage from './pages/IframePage';
import EdgeHeaderPage from './pages/EdgeHeaderPage';
import SpinnerPage from './pages/SpinnerPage';
import MasonryPage from './pages/MasonryPage';
import ScrollBarPage from './pages/ScrollBarPage';
import NavsPage from './pages/NavsPage';
import TabsPage from './pages/TabsPage';
import PillsPage from './pages/PillsPage';
import NotificationPage from './pages/NotificationPage';
import InputGroupPage from './pages/InputGroupPage';
import TreeviewPage from './pages/TreeviewPage';
import RatingPage from './pages/RatingPage';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/react/' component={HomePage} />
        <Route exact path='/react/addons' component={AddonsNavPage} />
        <Route exact path='/react/advanced' component={AdvancedNavPage} />
        <Route exact path='/react/components' component={ComponentsNavPage} />
        <Route exact path='/react/css' component={CSSNavPage} />
        <Route exact path='/react/forms' component={FormsNavPage} />
        <Route exact path='/react/modals' component={ModalsNavPage} />
        <Route exact path='/react/navigation' component={NavigationNavPage} />
        <Route exact path='/react/tables' component={TablesNavPage} />

        {/* FREE */}
        <Route path='/react/addons/iframe' component={IframePage} />
        <Route path='/react/addons/edge-header' component={EdgeHeaderPage} />
        <Route path='/react/addons/notifications' component={NotificationPage} />
        <Route path='/react/addons/treeview' component={TreeviewPage} />
        <Route path='/react/addons/Rating' component={RatingPage} />
        <Route path='/react/advanced/carousel' component={CarouselPage} />
        <Route path='/react/advanced/collapse' component={CollapsePage} />
        <Route path='/react/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/react/advanced/videocarousel' component={VideoCarouselPage} />
        <Route path='/react/advanced/alerts' component={AlertPage} />
        <Route path='/react/advanced/popover' component={PopoverPage} />
        <Route path='/react/advanced/tooltips' component={TooltipsPage} />
        <Route path='/react/advanced/charts' component={ChartsPage} />
        <Route path='/react/advanced/scrollbar' component={ScrollBarPage} />
        <Route path='/react/css/animations' component={AnimationPage} />
        <Route path='/react/css/icons' component={FaPage} />
        <Route path='/react/css/jumbotron' component={JumbotronPage} />
        <Route path='/react/css/masks' component={MasksPage} />
        <Route path='/react/css/hover' component={HoverPage} />
        <Route path='/react/css/masonry' component={MasonryPage} />
        <Route path='/react/components/media' component={MediaPage} />
        <Route path='/react/components/badge' component={BadgePage} />
        <Route path='/react/components/cards' component={CardsPage} />
        <Route path='/react/components/buttons' component={ButtonPage} />
        <Route path='/react/components/dropdown' component={DropdownPage} />
        <Route path='/react/components/progress' component={ProgressPage} />
        <Route path='/react/components/pagination' component={PaginationPage} />
        <Route path='/react/components/list-group' component={ListGroupPage} />
        <Route path='/react/components/panels' component={PanelPage} />
        <Route path='/react/components/search' component={SearchPage} />
        <Route path='/react/components/spinner' component={SpinnerPage} />
        <Route path='/react/components/tabs' component={TabsPage} />
        <Route path='/react/components/pills' component={PillsPage} />
        <Route path='/react/forms/forms' component={FormsPage} />
        <Route path='/react/forms/validation' component={ValidationPage} />
        <Route path='/react/forms/input' component={InputPage} />
        <Route path='/react/forms/inputgroup' component={InputGroupPage} />
        <Route path='/react/modals/modal' component={ModalPage} />
        <Route path='/react/modals/modal-form' component={ModalFormPage} />
        <Route path='/react/modals/modal-examples' component={ModalExamplesPage} />
        <Route path='/react/navigation/navbar' component={NavbarPage} />
        <Route path='/react/navigation/breadcrumb' component={BreadcrumbPage} />
        <Route path='/react/navigation/navs' component={NavsPage} />
        <Route path='/react/navigation/footer' component={FooterPage} />
        <Route path='/react/tables/table' component={TablePage} />
        <Route path='/react/tables/table-responsive' component={TableResponsivePage} />
        <Route path='/react/tables/table-scroll' component={TableScrollPage} />
        <Route path='/react/tables/table-styles' component={TableStylesPage} />
        <Route path='/react/tables/datatable-api' component={DatatableApiPage} />
        <Route path='/react/tables/datatable' component={DatatablePage} />

        <Route path='/react/sharda/homepage' component={HomepageSharda} />
        <Route path='/react/sharda/learn' component={LearnSharda} />

        
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }} 
        />
      </Switch>
    );
  }
}

export default Routes;
